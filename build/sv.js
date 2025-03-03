Auth0.registerLanguageDictionary('sv', {
  error: {
    forgotPassword: {
      too_many_requests:
        'Du har nått gränsen för maximalt antal försök att ändra ditt lösenord. Vänta och försök sedan igen.',
      'lock.fallback': 'Något gick fel när vi försökte ändra ditt lösenord.',
      enterprise_email:
        'Din e-post domän är en del av en företagsidentitetsleverantör. För att återställa ditt lösenord, se din säkerhetsadministratör.'
    },
    login: {
      blocked_user: 'Användaren är spärrad.',
      invalid_user_password: 'Inloggningsuppgifterna är felaktiga.',
      'lock.fallback': 'Något gick fel vid inloggningsförsöket.',
      'lock.invalid_code': 'Fel kod.',
      'lock.invalid_email_password': 'Fel e-postadress eller lösenord.',
      'lock.invalid_username_password': 'Fel användarnamn eller lösenord.',
      'lock.network': 'Kunde inte kontakta servern. Kontrollera din uppkoppling och försök igen.',
      'lock.popup_closed': 'Popup-fönster stängt. Försök igen.',
      'lock.unauthorized': 'Åtkomst nekad. Försök igen.',
      password_change_required:
        'Du behöver ändra ditt lösenord då detta är första gången du loggar in eller för att ditt lösenord har gått ut.',
      password_leaked:
        'Din konto har blivit spärrat då ditt lösenord har lagts upp på en annan webbsida. Du har fått e-post med instruktioner om hur du låser upp ditt konto.',
      too_many_attempts: 'Ditt konto har blivit spärrat efter flera felaktiga inloggningsförsök.',
      'lock.mfa_registration_required':
        'Multifaktorautentisering krävs men enheten är inte inskrivna. Vänligen registrera det innan vi går vidare.',
      'lock.mfa_invalid_code': 'Fel kod. Var god försök igen.',
      session_missing:
        'Det gick inte att slutföra autentiseringsbegäran. Försök igen efter att stänga alla öppna dialoger',
      'hrd.not_matching_email': 'Använd gärna ditt företags e-post för att logga in.',
      too_many_requests:
        'Vi är ledsna. Det finns för många förfrågningar just nu. Vänligen ladda om sidan och försök igen. Om detta kvarstår, försök igen senare.',
      invalid_captcha: 'Lös utmaningsfrågan för att verifiera att du inte är en robot.',
      invalid_recaptcha: 'Markera kryssrutan för att verifiera att du inte är en robot.'
    },
    passwordless: {
      'bad.email': 'Din e-postadress är ogiltig.',
      'bad.phone_number': 'Ditt telefonnummer är ogiltigt.',
      'lock.fallback': 'Något gick fel.'
    },
    signUp: {
      invalid_password: 'Lösenordet är ogiltigt.',
      'lock.fallback': 'Något gick fel vid registreringen.',
      password_dictionary_error: 'Lösenordet är för vanligt.',
      password_no_user_info_error: 'Lösenordet baseras på personuppgifter.',
      password_strength_error: 'Lösenordet är för svagt.',
      user_exists: 'Användaren finns redan.',
      username_exists: 'Användarnamnet finns redan.',
      social_signup_needs_terms_acception: 'Godkänn användarvillkoren nedan för att fortsätta.'
    }
  },
  success: {
    logIn: 'Tack för att du loggar in.',
    forgotPassword: 'Vi har skickat dig ett e-postmeddelande där du kan återställa ditt lösenord.',
    magicLink: 'Vi har skickat en länk för att logga in<br />på %s.',
    signUp: 'Tack för att du registrerade dig.'
  },
  blankErrorHint: '',
  blankPasswordErrorHint: 'Får inte lämnas tom',
  blankEmailErrorHint: 'Får inte lämnas tom',
  blankUsernameErrorHint: 'Får inte lämnas tom',
  blankCaptchaErrorHint: 'Får inte lämnas tom',
  codeInputPlaceholder: 'Din kod',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'eller',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'eller',
  emailInputPlaceholder: 'dinepostadress@exempel.se',
  enterpriseLoginIntructions: 'Logga in med dina företagsuppgifter.',
  enterpriseActiveLoginInstructions: 'Ange dina företagsuppgifter för %s.',
  failedLabel: 'Misslyckades!',
  forgotPasswordAction: 'Glömt ditt lösenord?',
  forgotPasswordInstructions:
    'Ange din e-postadress. Vi skickar ett e-postmeddelande med instruktioner för att återställa ditt lösenord.',
  forgotPasswordSubmitLabel: 'Skicka e-post',
  invalidErrorHint: '',
  invalidPasswordErrorHint: 'Ogiltig',
  invalidEmailErrorHint: 'Ogiltig',
  invalidUsernameErrorHint: 'Ogiltig',
  lastLoginInstructions: 'Senast loggade du in med',
  loginAtLabel: 'Logga in på %s',
  loginLabel: 'Logga in',
  loginSubmitLabel: 'Logga in',
  loginWithLabel: 'Logga in med %s',
  notYourAccountAction: 'Inte ditt konto?',
  passwordInputPlaceholder: 'ditt lösenord',
  passwordStrength: {
    containsAtLeast: 'Måste innehålla minst %d av följande %d sorters tecken:',
    identicalChars: 'Inte fler än %d identiska tecken i rad (t.ex., "%s" är inte tillåtet)',
    nonEmpty: 'Lösenord får inte vara tomma',
    numbers: 'Siffror (t.ex. 0-9)',
    lengthAtLeast: 'Minst %d tecken långt',
    lowerCase: 'Gemener (a-z)',
    shouldContain: 'Måste innehålla:',
    specialCharacters: 'Specialtecken (t.ex. !@#$%^&*)',
    upperCase: 'Versaler (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'Annars, ange din e-postadress för att logga in<br>eller skapa ett konto',
  passwordlessEmailCodeInstructions: 'Ett e-postmeddelande med koden har skickats till %s.',
  passwordlessEmailInstructions: 'Ange din e-postadress för att logga in<br>eller skapa ett konto',
  passwordlessSMSAlternativeInstructions:
    'Annars, ange ditt telefonnummer för att logga in<br>eller skapa ett konto',
  passwordlessSMSCodeInstructions: 'Ett SMS med koden har skickats till %s.',
  passwordlessSMSInstructions: 'Ange ditt telefonnummer för att logga in<br>eller skapa ett konto',
  phoneNumberInputPlaceholder: 'ditt telefonnummer',
  resendCodeAction: 'Fick du ingen kod?',
  resendLabel: 'Skicka igen',
  resendingLabel: 'Skickar igen...',
  retryLabel: 'Försök igen',
  sentLabel: 'Skickats!',
  signUpLabel: 'Registrera dig',
  signUpSubmitLabel: 'Registrera dig',
  signUpWithLabel: 'Registrera dig med %s',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'Single Sign-On aktiverad',
  submitLabel: 'Skicka',
  unrecoverableError: 'Något gick fel.<br />Vänligen kontakta teknisk support.',
  usernameFormatErrorHint:
    'Använd %d-%d bokstäver, siffror och följande tecken: "_", ".", "+", "-"',
  usernameInputPlaceholder: 'ditt användarnamn',
  usernameOrEmailInputPlaceholder: 'användarnamn/e-postadress',
  title: 'Auth0',
  welcome: 'Välkommen %s!',
  windowsAuthInstructions: 'Du är uppkopplad från ditt företagsnätverk&hellip;',
  windowsAuthLabel: 'Windows Authentication',
  forgotPasswordTitle: 'Återställ ditt lösenord',
  signUpTitle: 'Registrera dig',
  mfaInputPlaceholder: 'Koda',
  mfaLoginTitle: '2 tvåstegsverifiering',
  mfaLoginInstructions: 'Ange verifieringskoden som genereras av din mobil applikation.',
  mfaSubmitLabel: 'Logga in',
  mfaCodeErrorHint: 'Använd %d',
  showPassword: 'Visa lösenord',
  signUpTerms: 'Genom att anmäla dig godkänner du våra användarvillkor och integritetspolicy.',
  captchaCodeInputPlaceholder: 'Ange koden som visas ovan',
  captchaMathInputPlaceholder: 'Lös formeln som visas ovan'
});
