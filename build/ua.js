Auth0.registerLanguageDictionary('ua', {
  error: {
    forgotPassword: {
      too_many_requests:
        'Ви досягли граничної кількості запитів на відновлення паролю. Будь ласка, почекайте перед повторною спробою.',
      'lock.fallback': 'Йой! Виникла непередбачувана помилка. Перепрошуємо.',
      enterprise_email:
        "Your email's domain is part of an Enterprise identity provider. To reset your password, please see your security administrator."
    },
    login: {
      blocked_user: 'Користувач заблокований.',
      invalid_user_password: 'Невірний пароль.',
      'lock.fallback': 'Йой! Виникла непередбачувана помилка при спробі авторизації. Перепрошуємо.',
      'lock.invalid_code': 'Невірний код.',
      'lock.invalid_email_password': 'Невірна адреса електронної пошти або пароль.',
      'lock.invalid_username_password': "Невірне ім'я користувача або пароль.",
      'lock.network':
        'Немає доступу до сервера. Будь ласка, перевірте підключення та повторіть спробу',
      'lock.popup_closed': 'Спливаюче вікно зачинене, будь ласка, спробуйте ще раз.',
      'lock.unauthorized': 'Недостатньо повноважень. Спробуйте ще раз.',
      password_change_required:
        'Необхідно оновити пароль, тому що ви виконуєте вхід в перший раз або строк дії паролю завершився.',
      password_leaked:
        'Цей обліковий запис був заблокований тому що стався витік вашого паролю на іншому веб-сайті. На вашу електронну поштову скриньку була відправлена інструкція по відновленню вашого облікового запису.',
      too_many_attempts:
        'Ваш обліковий запис був заблокований після декількох послідовних спроб входу до системи.',
      'lock.mfa_registration_required':
        'Вимагається багатофакторна аутентифікація, але пристрій не зареєстрований. Будь ласка, зареєструйте його перед тим як продовжувати.',
      'lock.mfa_invalid_code': 'Невірний код. Будь ласка, спробуйте ще раз.',
      session_missing:
        'Не вдалося виконати запит аутентифікації. Будь ласка, спробуйте ще раз попередньо закривши всі спливаючі вікна.',
      'hrd.not_matching_email':
        'Будь ласка, використовуйте адресу вашої корпоративної пошти для входу.',
      too_many_requests:
        "We're sorry. There are too many requests right now. Please reload the page and try again. If this persists, please try again later.",
      invalid_captcha: 'Вирішіть складне питання, щоб переконатися, що ви не робот.',
      invalid_recaptcha: 'Установіть прапорець, щоб переконатися, що ви не робот.'
    },
    passwordless: {
      'bad.email': 'Недійсна адреса електронної пошти',
      'bad.phone_number': 'Недійсний номер телефону',
      'lock.fallback': 'Йой! Виникла непередбачувана помилка при спробі авторизації. Перепрошуємо.'
    },
    signUp: {
      invalid_password: 'Невірний пароль.',
      'lock.fallback':
        'Сталася непередбачувана помилка при спробі створення облікового запису. Перепрошуємо.',
      password_dictionary_error: 'Пароль занадто загальний',
      password_no_user_info_error: 'Пароль ґрунтується на інформації про користувача.',
      password_strength_error: 'Пароль занадто слабкий.',
      user_exists: 'Користувач вже існує.',
      username_exists: "Ім'я користувача вже існує.",
      social_signup_needs_terms_acception:
        'Прийміть наведені нижче Умови надання послуг, щоб продовжити.'
    }
  },
  success: {
    logIn: 'Дякуємо що увійшли.',
    forgotPassword: 'Ми відправили вам повідомлення для відновлення паролю.',
    magicLink: 'Ми відправили вам посилання для входу<br />в %s.',
    signUp: 'Дякуємо що зареєструвалися.'
  },
  blankErrorHint: '',
  blankPasswordErrorHint: 'Поле не може бути порожнім',
  blankEmailErrorHint: 'Поле не може бути порожнім',
  blankUsernameErrorHint: 'Поле не може бути порожнім',
  blankCaptchaErrorHint: 'Поле не може бути порожнім',
  codeInputPlaceholder: 'Ваш код',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'або',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'або',
  emailInputPlaceholder: 'marko@vovchok.com',
  enterpriseLoginIntructions:
    'Використовуйте облікові дані вашого корпоративного облікового запису для входу.',
  enterpriseActiveLoginInstructions:
    'Будь ласка, введіть ваші корпоративні облікові дані за посиланням %s.',
  failedLabel: 'Не вдалося виконати дію!',
  forgotPasswordAction: "Ви не пам'ятаєте пароль?",
  forgotPasswordInstructions:
    'Будь ласка, введіть адресу вашої електронної скриньки. Ми відправимо вам повідомлення для відновлення паролю.',
  forgotPasswordSubmitLabel: 'відправити електронною поштою',
  invalidErrorHint: '',
  invalidPasswordErrorHint: 'Недійсні дані',
  invalidEmailErrorHint: 'Недійсні дані',
  invalidUsernameErrorHint: 'Недійсні дані',
  lastLoginInstructions: 'Останнього разу ви увійшли використовуючи',
  loginAtLabel: 'Увійдіть за посиланням %s',
  loginLabel: 'Вхід',
  loginSubmitLabel: 'авторизуватися',
  loginWithLabel: 'Вхід через %s',
  notYourAccountAction: 'Це не ваш обліковий запис?',
  passwordInputPlaceholder: 'Ваш пароль',
  passwordStrength: {
    containsAtLeast: 'Містити як мінімум %d категорії символів із наступних %d-х:',
    identicalChars: 'Не більш ніж %d ідентичних символів (наприклад, "%s" не допускається)',
    nonEmpty: 'Пароль не може бути пустим',
    numbers: 'Цифри (0-9)',
    lengthAtLeast: 'Як мінімум %d символів',
    lowerCase: 'Малі літери (a-z)',
    shouldContain: 'Повинен містити:',
    specialCharacters: 'Спеціальні символи (наприклад !@#$%^&*)',
    upperCase: 'Прописні літери (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'Або введіть адресу електронної пошти для того щоб<br>увійти або зареєструватися',
  passwordlessEmailCodeInstructions: 'Повідомлення з кодом відправлено на %s.',
  passwordlessEmailInstructions:
    'Введіть адресу електронної пошти для того щоб<br>увійти або зареєструватися',
  passwordlessSMSAlternativeInstructions:
    'Або введіть ваш номер телефону для того щоб<br>увійти або зареєструватися',
  passwordlessSMSCodeInstructions: 'СМС з кодом було відправлено на %s.',
  passwordlessSMSInstructions:
    'Введіть ваш номер телефону для того щоб<br>увійти або зареєструватися',
  phoneNumberInputPlaceholder: 'Ваш номер телефону',
  resendCodeAction: 'Не отримали код?',
  resendLabel: 'Відправити повторний запит',
  resendingLabel: 'Повторне відправлення...',
  retryLabel: 'Повторити спробу',
  sentLabel: 'Відправлено!',
  signUpLabel: 'Реєстрація',
  signUpSubmitLabel: 'Зареєструватися',
  signUpWithLabel: 'Зареєструватися через %s',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'Єдиний вхід включений',
  submitLabel: 'Відправити',
  unrecoverableError:
    'Йой! Сталася непередбачувана помилка.<br />Будь ласка, зверніться в службу технічної підтримки.',
  usernameFormatErrorHint:
    'Use %d-%d letters, numbers and the following characters: "_", ".", "+", "-"',
  usernameInputPlaceholder: "Ваше ім'я користувача",
  usernameOrEmailInputPlaceholder: 'електронної пошти/користувача',
  title: 'Auth0',
  welcome: 'Ласкаво просимо, %s!',
  windowsAuthInstructions: 'Ви підключені через корпоративну мережу&hellip;',
  windowsAuthLabel: 'Аутентифікація Windows',
  forgotPasswordTitle: 'Скинути пароль',
  signUpTitle: 'Зареєструватися',
  mfaInputPlaceholder: 'Код',
  mfaLoginTitle: 'Дворівнева перевірка',
  mfaLoginInstructions:
    'Будь ласка, введіть перевірчий код що був згенерований мобільним додатком.',
  mfaSubmitLabel: 'Авторизуватися',
  mfaCodeErrorHint: 'Використовуйте %d номери',
  showPassword: 'Show password',
  signUpTerms: 'By signing up, you agree to our terms of service and privacy policy.',
  captchaCodeInputPlaceholder: 'Введіть код, показаний вище',
  captchaMathInputPlaceholder: 'Розв’яжіть формулу, показану вище'
});
