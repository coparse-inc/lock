Auth0.registerLanguageDictionary('pl', {
  error: {
    forgotPassword: {
      too_many_requests:
        'Przekroczyłeś limit prób zmiany hasła. Odczekaj chwilę, zanim spróbujesz ponownie.',
      'lock.fallback': 'Przykro nam, coś poszło nie tak podczas próby zmiany hasła.',
      enterprise_email:
        'Domena Twojego adresu e-mail jest częścią dostawcy tożsamości korporacyjnej. Aby zresetować hasło, skontaktuj się z administratorem bezpieczeństwa.'
    },
    login: {
      blocked_user: 'Ten użytkownik jest zablokowany.',
      invalid_user_password: 'Niepoprawne dane logowania.',
      'lock.fallback': 'Przykro nam, coś poszło nie tak podczas próby logowania.',
      'lock.invalid_code': 'Niepoprawny kod.',
      'lock.invalid_email_password': 'Niepoprawny email lub hasło.',
      'lock.invalid_username_password': 'Niepoprawna nazwa użytkownika lub hasło.',
      'lock.network':
        'Kontakt z serwerem nie powiódł się. Sprawdź swoje połączenie i spróbuj ponownie.',
      'lock.popup_closed': 'Okno zamknięte. Spróbuj ponownie.',
      'lock.unauthorized': 'Autoryzacja nie została udzielona. Spróbuj ponownie.',
      password_change_required:
        'Musisz zmienić swoje hasło, ponieważ logujesz się po raz pierwszy lub Twoje hasło wygasło.',
      password_leaked:
        'Ta nazwa użytkownika została zablokowana, ponieważ Twoje hasło wyciekło w innym serwisie. Wysłaliśmy do Ciebie email z instrukcją odblokowania konta.',
      too_many_attempts:
        'Twoje konto zostało zablokowane po zbyt wielu nieudanych próbach logowania.',
      'lock.mfa_registration_required':
        'uwierzytelnianie wielopoziomowe jest wymagane, ale urządzenie nie jest zarejestrowany. Proszę zapisać go przed przejściem.',
      'lock.mfa_invalid_code': 'Niepoprawny kod. Proszę spróbuj ponownie.',
      session_missing:
        'Nie udało się zrealizować żądania uwierzytelnienia. Spróbuj ponownie po zamknięciu wszystkich otwartych okien dialogowych',
      'hrd.not_matching_email': 'Proszę korzystać z firmowego e-mail aby się zalogować.',
      too_many_requests:
        'Przykro nam. W tej chwili jest zbyt wiele żądań. Załaduj ponownie stronę i spróbuj ponownie. Jeśli problem będzie się powtarzał, spróbuj ponownie później.',
      invalid_captcha: 'Rozwiąż pytanie kontrolne, aby sprawdzić, czy nie jesteś robotem.',
      invalid_recaptcha: 'Zaznacz pole wyboru, aby potwierdzić, że nie jesteś robotem.'
    },
    passwordless: {
      'bad.email': 'Adres email nie jest poprawny',
      'bad.phone_number': 'Numer telefonu nie jest poprawny',
      'lock.fallback': 'Przykro nam, coś poszło nie tak'
    },
    signUp: {
      invalid_password: 'Hasło nie jest poprawne.',
      'lock.fallback': 'Przykro nam, coś poszło nie tak podczas próby rejestracji.',
      password_dictionary_error: 'Hasło jest zbyt oczywiste.',
      password_no_user_info_error: 'Hasło oparte jest na informacjach o użytkowniku.',
      password_strength_error: 'Hasło jest zbyt słabe.',
      user_exists: 'Użytkownik już istnieje.',
      username_exists: 'Nazwa użytkownika już istnieje.',
      social_signup_needs_terms_acception: 'Zaakceptuj poniższe Warunki usługi, aby kontynuować.'
    }
  },
  success: {
    logIn: 'Logowanie poprawne, dziękujemy.',
    forgotPassword: 'Wysłaliśmy do Ciebie email z instrukcją, jak zresetować hasło.',
    magicLink: 'Wysłaliśmy do Ciebie link umożliwiający zalogowanie<br />do %s.',
    signUp: 'Rejestracja poprawna, dziękujemy.'
  },
  blankErrorHint: '',
  blankPasswordErrorHint: 'Nie może być puste',
  blankEmailErrorHint: 'Nie może być puste',
  blankUsernameErrorHint: 'Nie może być puste',
  blankCaptchaErrorHint: 'Nie może być puste',
  codeInputPlaceholder: 'Twój kod',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'albo',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'albo',
  emailInputPlaceholder: 'twój@email.pl',
  enterpriseLoginIntructions: 'Zaloguj się z użyciem danych firmowych.',
  enterpriseActiveLoginInstructions: 'Wpisz swoje dane firmowe w %s.',
  failedLabel: 'Nie udało się!',
  forgotPasswordAction: 'Nie pamiętasz hasła?',
  forgotPasswordInstructions:
    'Wpisz swój adres email. Wyślemy Ci informację o tym, jak zresetować hasło.',
  forgotPasswordSubmitLabel: 'Wyślij email',
  invalidErrorHint: '',
  invalidPasswordErrorHint: 'Niepoprawnie',
  invalidEmailErrorHint: 'Niepoprawnie',
  invalidUsernameErrorHint: 'Niepoprawnie',
  lastLoginInstructions: 'Ostatnie poprawne logowanie z:',
  loginAtLabel: 'Logowanie z: %s',
  loginLabel: 'Logowanie',
  loginSubmitLabel: 'Zaloguj się',
  loginWithLabel: 'Zaloguj się z %s',
  notYourAccountAction: 'Nie Twoje konto?',
  passwordInputPlaceholder: 'Twoje hasło',
  passwordStrength: {
    containsAtLeast: 'Zawiera przynajmniej %d następujących %d typów znaków:',
    identicalChars:
      'Nie więcej niż %d takich samych znaków pod rząd (np., "%s" nie jest dozwolone)',
    nonEmpty: 'Hasło jest wymagane',
    numbers: 'Cyfry (np. 0-9)',
    lengthAtLeast: 'Przynajmniej %d znaków',
    lowerCase: 'Litery małe (a-z)',
    shouldContain: 'Powinno zawierać:',
    specialCharacters: 'Znaki specjalne (np. !@#$%^&*)',
    upperCase: 'Wielkie litery (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'W innym przypadku wpisz adres email, by się zalogować<br/>lub stwórz konto',
  passwordlessEmailCodeInstructions: 'Email z kodem został wysłany na adres %s.',
  passwordlessEmailInstructions: 'Wpisz adres email, by się zalogować<br/>lub stwórz konto',
  passwordlessSMSAlternativeInstructions:
    'W innym przypadku wpisz numer telefonu, by się zalogować<br/>lub stwórz konto',
  passwordlessSMSCodeInstructions: 'SMS z kodem został wysłany na numer %s.',
  passwordlessSMSInstructions: 'Wpisz numer telefonu, by się zalogować<br/>lub stwórz konto',
  phoneNumberInputPlaceholder: 'Twój numer telefonu',
  resendCodeAction: 'Nie otrzymałeś/-aś kodu?',
  resendLabel: 'Wyślij ponownie',
  resendingLabel: 'Wysyłanie...',
  retryLabel: 'Raz jeszcze',
  sentLabel: 'Wysłany!',
  signUpLabel: 'Rejestracja',
  signUpSubmitLabel: 'Zarejestruj się',
  signUpWithLabel: 'Zarejestruj się za pomocą %s',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'Single Sign-On włączony',
  submitLabel: 'Wyślij',
  unrecoverableError: 'Coś poszło nie tak.<br />Skontaktuj się z pomocą techniczną.',
  usernameFormatErrorHint: 'Użyj liter %d-%d, cyfr i następujących znaków: "_", ".", "+", "-"',
  usernameInputPlaceholder: 'Twoja nazwa użytkownika',
  usernameOrEmailInputPlaceholder: 'nazwa użytkownika/email',
  title: 'Auth0',
  welcome: 'Witaj %s!',
  windowsAuthInstructions: 'Jesteś połączony z sieci firmowej&hellip;',
  windowsAuthLabel: 'Uwierzytelnianie Windows',
  forgotPasswordTitle: 'Zresetuj swoje hasło',
  signUpTitle: 'Zapisz się',
  mfaInputPlaceholder: 'Kod',
  mfaLoginTitle: '2 Weryfikacja dwuetapowa',
  mfaLoginInstructions:
    'Podaj kod weryfikacyjny wygenerowany przez aplikację na telefon komórkowy.',
  mfaSubmitLabel: 'Zaloguj Się',
  mfaCodeErrorHint: 'Użyj %d numery',
  showPassword: 'Pokaż hasło',
  signUpTerms:
    'Rejestrując się, akceptujesz nasze warunki korzystania z usługi i politykę prywatności.',
  captchaCodeInputPlaceholder: 'Wpisz kod pokazany powyżej',
  captchaMathInputPlaceholder: 'Rozwiąż powyższy wzór'
});
