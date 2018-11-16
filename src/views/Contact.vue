<template>
  <div class='row'>
    <div class='col-md-8 offset-md-2'>
      <div class='contact'>
        <div class='contact-title'>
          <h3>お問い合わせ</h3>
          <p>ご連絡はTwitter(<a href='https://twitter.com/akashi__akashi'>@akashi__akashi</a>)のDM、または以下のフォームからお願いいたします。</p>
        </div>
        <form action='https://script.google.com/macros/s/AKfycbyZ5jfPXqNFNUixI_3n0R01qmkDcgT1SVunmxVytWAFjkn6mj4/exec' @submit.prevent='onSubmit'>

          <div class='form-name contact-form'>
            <label>名前</label><br>
            <input type='text' name='name' placeholder='お名前' v-model='name'>
          </div>

          <div class='form-email contact-form'>
            <label>メールアドレス</label><br>
            <input type='email' name='email' placeholder='example@gmail.com' v-model='email'>
          </div>

          <div class='form-message contact-form'>
            <label>メッセージ内容</label><br>
            <textarea name='message' rows='8' v-model='message'>
            </textarea>
          </div>

          <div class='send-button'>
            <input type='submit' value='送信'>
          </div>
        </form>
        <transition>
          <div v-if='message_send_flag' class='flash-message'>
            {{ notice_message_send_success }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import axios_jsonp from 'axios-jsonp';

  export default {
    title: 'Contact',
    data() {
      return {
        name: '',
        email: '',
        message: '',
        SPREADSHEET_ID: '1yWTIkNQBba-664zI5bAVO_UN0VPO5cj3sxQPMe6HEyM',
        SHEET_NAME: 'フォームデータ',
        notice_message_send_success: '送信しました',
        message_send_flag: false
      }
    },
    methods: {

    // axiosだとなぜかデータを送信できないので仕方なくajaxを利用
      onSubmit() {
        $.ajax({
          url: 'https://script.google.com/macros/s/AKfycbyZ5jfPXqNFNUixI_3n0R01qmkDcgT1SVunmxVytWAFjkn6mj4/exec',
          data: this.$data,
          dataType: 'jsonp',
          jsonpCallback: 'console.log',
          error: function(response) {
            return console.log(response)
          }
        })
        this.message_send_flag = true;
      }
    }
  }
</script>

<style lang='scss' scoped>

  h3 {
    font-family: 'Noto Sans JP', sans-serif;
    color: rgba(0, 0, 0, 0.7);
  }

  .contact {
    padding: 50px 0;

    a {
      color: rgba(0, 0, 0, 0.5);
      &:hover {
        text-decoration: underline;
      }
    }

    p {
      color: rgba(0, 0, 0, 0.8);
      padding: 15px 0 30px;
    }

    label {
      color: rgba(0, 0, 0, 0.8);
    }
  }

  .contact-form {
    padding-bottom: 30px;
  }

  input[type=text], input[type=email], textarea {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 3px;
  }

  .send-button {
    text-align: center;

    input {
      width: 30%;
      background-color: white;
      border: 1px solid #ddd;
      border-radius: 3px;
      color: rgba(0, 0, 0, 0.8);
      border: solid 1px gray;
      cursor: pointer;
    }
  }

  .flash-message {
    color: green;
    padding-top: 20px;
    text-align: center;
  }

  .v-enter-active {
    transition: opacity 1.5s;
  }

  .v-enter, .v-leave-to {
    opacity: 0;
  }

</style>