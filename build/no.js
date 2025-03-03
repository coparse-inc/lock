Auth0.registerLanguageDictionary('no', {
  error: {
    forgotPassword: {
      too_many_requests:
        'Du har nådd grensen for antall forsøk på å endre passord. Vennligst vent en stund før du forsøker på nytt',
      'lock.fallback': 'Beklager, men noe gikk galt når du forsøkte å endre passordet.',
      enterprise_email:
        'E-postdomenet ditt er en del av en Enterprise Identity-leverandør. For å tilbakestille passordet, vennligst se din sikkerhetsadministrator.'
    },
    login: {
      blocked_user: 'Denne brukeren er blokkert',
      invalid_user_password: 'Ugyldig passord',
      'lock.fallback': 'Beklager, men noe gikk galt når du forsøkte å logge deg inn.',
      'lock.invalid_code': 'Feil kode.',
      'lock.invalid_email_password': 'Feil e-post eller passord',
      'lock.invalid_username_password': 'Feil brukernavn eller passord.',
      'lock.network':
        'Får ikke kontakt med serveren, vennligst kontrollèr din dekning eller nettverkstilkobling, og forsøk på nytt.',
      'lock.popup_closed': 'Popup-vindu lukket. Prøv på nytt.',
      'lock.unauthorized': 'Tilgang ikke tillatt. Forsøk på nytt.',
      'lock.mfa_invalid_code': 'Feil kode! Forsøk på nytt.',
      password_change_required:
        'Du må oppdatere ditt passord, fordi dette enten er den første gangen du logger inn, eller at ditt passord har utløpt.',
      password_leaked:
        'Vi har oppdaget en potensiell sikkerhetsrisiko med denne brukerkontoen. For å beskytte deg mot misbruk, så har vi blokkert brukerkontoen med den aktuelle innloggingen. Vi har sendt deg en e-post med instruksjoner for hvordan du gjenåpner brukerkontoen din.',
      too_many_attempts:
        'Din brukerkonto har blitt blokkert etter gjentatte ugyldige innloggingsforsøk.',
      session_missing:
        'Vi kunne ikke fullføre forespørselen om autorisering. Forsøk å lukke andre åpne faner eller vinduer, og prøv på nytt.',
      'hrd.not_matching_email': 'Vennligst bruk din korrekte e-postadresse for innlogging.',
      'lock.mfa_registration_required':
        'Multifaktorautentisering kreves, men enheten din er ikke påmeldt. Vennligst meld deg inn før du går videre.',
      too_many_requests:
        'Vi er lei oss. Det er for mange forespørsler akkurat nå. Vennligst last siden og prøv igjen. Hvis dette vedvarer, vennligst prøv igjen senere.',
      invalid_captcha: 'Løs utfordringsspørsmålet for å bekrefte at du ikke er en robot.',
      invalid_recaptcha: 'Merk av i avmerkingsboksen for å bekrefte at du ikke er en robot.'
    },
    passwordless: {
      'bad.email': 'Ugyldig e-postadresse',
      'bad.phone_number': 'Ugyldig telefonnummer',
      'lock.fallback': 'Beklager, men noe gikk galt'
    },
    signUp: {
      invalid_password: 'Ugyldig passord.',
      'lock.fallback': 'Beklager, men noe gikk skeis i registreringen.',
      password_dictionary_error: 'Passordet er for enkelt.',
      password_no_user_info_error: 'Passordet er basert på kjente bruksdata.',
      password_strength_error: 'Passordet er for svakt.',
      user_exists: 'Denne brukeren eksisterer allerede.',
      username_exists: 'Dette brukernavnet eksisterer allerede.',
      social_signup_needs_terms_acception: 'Vennligst godta vilkårene nedenfor for å fortsette.'
    }
  },
  success: {
    logIn: 'Takk for innloggingen.',
    forgotPassword: 'Vi har akkurat sendt deg en e-post hvor du kan endre ditt passord.',
    magicLink: 'Vi har sendt deg en link for å logge inn på %s.',
    signUp: 'Takk for registreringen!.'
  },
  blankErrorHint: '',
  blankPasswordErrorHint: 'Dette feltet kan ikke være tomt',
  blankEmailErrorHint: 'Dette feltet kan ikke være tomt',
  blankUsernameErrorHint: 'Dette feltet kan ikke være tomt',
  blankCaptchaErrorHint: 'Dette feltet kan ikke være tomt',
  codeInputPlaceholder: 'din kode',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'eller',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'eller',
  emailInputPlaceholder: 'deg@eksempel.no',
  enterpriseLoginIntructions: 'Benytt dine offisielle innloggingsdetaljer.',
  enterpriseActiveLoginInstructions:
    'Vennligst tast inn dine offisielle innloggingsdetaljer på %s.',
  failedLabel: 'Feil!',
  forgotPasswordTitle: 'Nullstill ditt passord',
  forgotPasswordAction: 'Har du glemt ditt passord?',
  forgotPasswordInstructions:
    'Vennligst skriv inn din e-postadresse, og vi vil sende deg en e-post hvor du kan nullstille ditt passord.',
  forgotPasswordSubmitLabel: 'Send e-post',
  invalidErrorHint: '',
  invalidPasswordErrorHint: 'Ugyldig',
  invalidEmailErrorHint: 'Ugyldig',
  invalidUsernameErrorHint: 'Ugyldig',
  lastLoginInstructions: 'Sist gang du logget deg inn med',
  loginAtLabel: 'Logg inn som %s',
  loginLabel: 'Logg inn',
  loginSubmitLabel: 'Logg inn',
  loginWithLabel: 'Logg inn med %s',
  notYourAccountAction: 'Er det ikke din brukerkonto?',
  passwordInputPlaceholder: 'Ditt passord',
  passwordStrength: {
    containsAtLeast: 'Inneholder minst %d av følgende %d type tegn',
    identicalChars: 'Ikke flere enn %d identiske tegn på rad (eks., "%s" er tillatt)',
    nonEmpty: 'Passordet kan ikke være tomt',
    numbers: 'Tallsifre (eks. 0-9)',
    lengthAtLeast: 'Minst %d tegn',
    lowerCase: 'Små bokstaver (a-z)',
    shouldContain: 'Bør inneholde:',
    specialCharacters: 'Spesialtegn (eks. !@#$%^&*)',
    upperCase: 'Store bokstaver (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'Eller, skriv inn din e-postadresse for å logge inn <br/> eller opprette en brukerkonto',
  passwordlessEmailCodeInstructions: 'En e-post med kode har blitt sendt til %s.',
  passwordlessEmailInstructions:
    'Skriv inn din e-postadresse for å logge inn<br/>eller opprette en brukerkonto',
  passwordlessSMSAlternativeInstructions:
    'Eller, tast inn ditt mobilnummer for å logge inn<br/>eller opprette en brukerkonto',
  passwordlessSMSCodeInstructions: 'En SMS med kode er sendt til %s.',
  passwordlessSMSInstructions:
    'Tast inn ditt mobilnummer for å logge inn<br/>eller opprette en brukerkonto',
  phoneNumberInputPlaceholder: 'ditt mobilnummer',
  resendCodeAction: 'Har du ikke mottatt noen kode?',
  resendLabel: 'Send på nytt',
  resendingLabel: 'Sender…',
  retryLabel: 'Prøv på nytt',
  sentLabel: 'Sendt!',
  showPassword: 'Vis passord',
  signUpTitle: 'Registrer deg',
  signUpLabel: 'Registrer deg',
  signUpSubmitLabel: 'Registrer deg',
  signUpWithLabel: 'Registrer deg med %s',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'Ett-stegs innlogging klart',
  submitLabel: 'Send',
  unrecoverableError: 'Noe gikk galt.<br/> Vennligst kontakt teknisk support.',
  usernameFormatErrorHint: 'Bruk %d-%d bokstaver, tall og følgende spesialtegn: "_", ".", "+", "-"',
  usernameInputPlaceholder: 'ditt brukernavn',
  usernameOrEmailInputPlaceholder: 'brukernavn/e-post',
  title: 'Auth0',
  welcome: 'Velkommen %s!',
  windowsAuthInstructions: 'Du er tilkoblet via ditt offisielle nettverk;',
  windowsAuthLabel: 'Windows Authentication',
  mfaInputPlaceholder: 'Kode',
  mfaLoginTitle: '2-stegs verifisering',
  mfaLoginInstructions: 'Vennligst tast inn verifiseringskoden som er generert på din mobilenhet',
  mfaSubmitLabel: 'Logg inn',
  mfaCodeErrorHint: 'Bruk %d tall',
  signUpTerms: 'Ved å registrere deg, godtar du våre vilkår for bruk og personvern.',
  captchaCodeInputPlaceholder: 'Tast inn koden vist over',
  captchaMathInputPlaceholder: 'Løs formelen vist ovenfor'
});
