Auth0.registerLanguageDictionary('ja', {
  error: {
    forgotPassword: {
      too_many_requests:
        'パスワード変更のリクエスト数が上限に達しました。時間をおいてやり直してください。',
      'lock.fallback':
        '申し訳ございません。パスワード変更中に何らかの理由によりエラーが発生しました。',
      enterprise_email:
        '電子メールのドメインは、エンタープライズ向けIDプロバイダの一部です。パスワードをリセットするには、セキュリティ管理者にお問い合わせください。'
    },
    login: {
      blocked_user: 'ユーザーはブロックされています。',
      invalid_user_password: 'パスワードに誤りがあります。',
      'lock.fallback': '申し訳ございません。ログイン中に何らかの理由によりエラーが発生しました。',
      'lock.invalid_code': '不正なコードです。',
      'lock.invalid_email_password': 'メールアドレスもしくはパスワードが間違っています。',
      'lock.invalid_username_password': 'ユーザー名もしくはパスワードが間違っています。',
      'lock.network': 'サーバとの通信に失敗しました。もう一度やり直してください。',
      'lock.popup_closed': 'ポップアップウィンドウが閉じられました。もう一度やり直してください。',
      'lock.unauthorized': '権限がありません。もう一度やり直してください。',
      'lock.mfa_registration_required':
        '多段階認証が必要ですが、デバイスが登録されていません。先にデバイスをご登録ください。',
      'lock.mfa_invalid_code': '不正なコードです。もう一度やり直してください。',
      password_change_required:
        '初めてのログインか、パスワードの期限切れのため、パスワードを更新する必要があります。',
      password_leaked:
        'このアカウントはパスワード漏洩の可能性があるため、一時的にブロックされています。ブロックの解除方法についてのメールを送信しましたのでご確認ください。',
      too_many_attempts: 'このアカウントは、短時間での複数回ログイン試行によりブロックされました。',
      session_missing:
        '認証リクエストを完了できませんでした。すべての開いているダイアログを閉じた後にもう一度お試しください。',
      'hrd.not_matching_email': 'ログインするには、企業のメールアドレスを使用してください。',
      too_many_requests:
        '申し訳ございません。今はあまりにも多くの要求があります。ページを再読み込みしてもう一度やり直してください。それでも解決しない場合は、後でもう一度やり直してください。',
      invalid_captcha: 'チャレンジ質問を解いて、ロボットではないことを確認してください。',
      invalid_recaptcha: 'チェックボックスを選択して、ロボットでないことを確認します。'
    },
    passwordless: {
      'bad.email': 'メールアドレスが不正です',
      'bad.phone_number': '電話番号が不正です',
      'lock.fallback': '申し訳ございません。エラーが発生しました。'
    },
    signUp: {
      invalid_password: 'パスワードが不正です。',
      'lock.fallback':
        '申し訳ございません。ユーザー登録時に何らかの理由によりエラーが発生しました。',
      password_dictionary_error: 'パスワードが単純すぎます。',
      password_no_user_info_error: 'ユーザー情報を含むパスワードは避けてください。',
      password_strength_error: 'パスワードが脆弱です。',
      user_exists: 'すでに登録されているユーザーです。',
      username_exists: 'すでに使用されているユーザー名です。',
      social_signup_needs_terms_acception:
        'サインアップするには以下の利用規約・プライバシーボリシーに同意してください。'
    }
  },
  success: {
    logIn: 'ログインに成功しました。',
    forgotPassword: 'パスワードをリセットするためのメールをお送りしました。',
    magicLink: '%s<br />へログインするためのリンクを送信しました。',
    signUp: 'ユーザー登録が完了しました。'
  },
  blankErrorHint: '',
  blankPasswordErrorHint: 'この項目は必須です。',
  blankEmailErrorHint: 'この項目は必須です。',
  blankUsernameErrorHint: 'この項目は必須です。',
  blankCaptchaErrorHint: 'この項目は必須です。',
  codeInputPlaceholder: 'コードを入力',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'または',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'または',
  emailInputPlaceholder: 'yours@example.com',
  enterpriseLoginIntructions: '企業の認証情報でログインしてください。',
  enterpriseActiveLoginInstructions: '%sの認証情報を入力してください',
  failedLabel: '失敗しました。',
  forgotPasswordTitle: 'パスワード再設定',
  forgotPasswordAction: 'パスワードをお忘れですか？',
  forgotPasswordInstructions:
    'アカウントの登録メールアドレスをご入力ください。パスワード再設定用のリンクをメールします。',
  forgotPasswordSubmitLabel: '再設定用のリンクを送る',
  invalidErrorHint: '',
  invalidPasswordErrorHint: 'エラー',
  invalidEmailErrorHint: 'エラー',
  invalidUsernameErrorHint: 'エラー',
  lastLoginInstructions: '最終ログイン:',
  loginAtLabel: '%sへのログイン',
  loginLabel: 'ログイン',
  loginSubmitLabel: 'ログイン',
  loginWithLabel: '%sでログイン',
  notYourAccountAction: 'これはあなたのアカウントではありませんか？',
  passwordInputPlaceholder: 'パスワード',
  passwordStrength: {
    containsAtLeast: '%dつ以上の条件を満たす必要があります。（条件は以下の%dつ）',
    identicalChars: '連続して同じ文字を%d個以上入力できません（例: "%s" は使用できません）',
    nonEmpty: 'パスワードは必須です',
    numbers: '数字 (0-9)',
    lengthAtLeast: '%d文字以上',
    lowerCase: '小文字のアルファベット (a-z)',
    shouldContain: '含まれるべき文字:',
    specialCharacters: '特殊文字 (例: !@#$%^&*)',
    upperCase: '大文字のアルファベット (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'もしくはメールアドレスを入力してログインする、<br />またはアカウントを作成してください。',
  passwordlessEmailCodeInstructions: '%s へメールでコードが送信されました。',
  passwordlessEmailInstructions:
    'メールアドレスを入力してログインする、<br />またはアカウントを作成してください。',
  passwordlessSMSAlternativeInstructions:
    'もしくは電話番号を入力してログインする、<br />またはアカウントを作成してください。',
  passwordlessSMSCodeInstructions: '%s にSMSでコードが送信されました。',
  passwordlessSMSInstructions:
    '電話番号を入力してログインする、<br />またはアカウントを作成してください。',
  phoneNumberInputPlaceholder: '電話番号',
  resendCodeAction: 'コードは受け取れましたか？',
  resendLabel: '再送する',
  resendingLabel: '再送中...',
  retryLabel: 'もう一度',
  sentLabel: '送信完了',
  showPassword: 'パスワードを表示する',
  signUpTitle: 'ユーザー登録',
  signUpLabel: 'ユーザー登録',
  signUpSubmitLabel: 'ユーザー登録',
  signUpWithLabel: '%sでユーザー登録',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'シングルサインオンが有効になっています',
  submitLabel: '送信',
  unrecoverableError: 'エラーが発生しました。<br />サポートへご連絡ください。',
  usernameFormatErrorHint:
    '%d-%d個の文字、数字、および以下の文字が使用可能です: "_"、 "."、 "+"、 "-"',
  usernameInputPlaceholder: 'ユーザー名',
  usernameOrEmailInputPlaceholder: 'ユーザー名/メールアドレス',
  title: 'Auth0',
  welcome: 'ようこそ%sさん',
  windowsAuthInstructions: '企業ネットワークから接続されています;',
  windowsAuthLabel: 'Windows認証',
  mfaInputPlaceholder: 'コード',
  mfaLoginTitle: '二段階認証',
  mfaLoginInstructions: 'スマートフォンアプリケーションで生成された確認コードを入力してください。',
  mfaSubmitLabel: 'ログイン',
  mfaCodeErrorHint: '%d個の数字を使用してください',
  signUpTerms: 'サインアップすることで、利用規約とプライバシーポリシーに同意したことになります。',
  captchaCodeInputPlaceholder: '上記のコードを入力してください',
  captchaMathInputPlaceholder: '上記の式を解きます'
});
