Auth0.registerLanguageDictionary('sk', {
  error: {
    forgotPassword: {
      too_many_requests:
        'Prekročili ste limit pokusov o zmenu hesla. Prosím počkajte pred ďalším pokusom.',
      'lock.fallback': 'Prepáčte, zmena hesla nebola úspešná.',
      enterprise_email:
        'Doména vášho e-mailu je súčasťou poskytovateľa Enterprise Identity. Ak chcete obnoviť svoje heslo, navštívte správcu zabezpečenia.'
    },
    login: {
      blocked_user: 'Užívateľ je blokovaný.',
      invalid_user_password: 'Neprávne prihlasovacie údaje',
      'lock.fallback': 'Prepáčte, prihlásenie zlyhalo.',
      'lock.invalid_code': 'Nesprávny kód.',
      'lock.invalid_email_password': 'Nesprávny email alebo heslo.',
      'lock.invalid_username_password': 'Nesprávne meno alebo heslo.',
      'lock.network': 'Spojenie so serverom zlyhalo. Prosím skontrolujte pripojenie k internetu.',
      'lock.popup_closed': 'Vyskakovacie okno zatvorené. Skúste znova.',
      'lock.unauthorized': 'Neoprávnený prístup. Skúste znova.',
      'lock.mfa_registration_required':
        'Vyžeduje sa multifaktorová autentifikácia, vaše zariadenie žiaľ nie je registrované. Skôr ako budete pokračovať, zaregistrujte svoje zariadenie.',
      'lock.mfa_invalid_code': 'Nesprávny kód. Skúste to znova.',
      password_change_required:
        'Aktualizujte si heslo. Toto je vaše prvé prihláasenie alebo vypršala platnosť hesla.',
      password_leaked:
        'Prihlasovacie meno bolo zablokované. Vaše prihlasovacie údaje unikli z inej stránky. Poslali sme Vám e-mail s inštrukciami ako ho odblokujete',
      too_many_attempts: 'Vaše konto bolo zablokované po viacnásobných pokusoch o prihlásenie',
      session_missing:
        'Nedá sa odoslať autentifikačná požiadavka. Prosím zatvorte všetky dialogové okná a skúste to znova.',
      'hrd.not_matching_email': 'Prosím, použite svoj firemný e-mail na prihlásenie.',
      too_many_requests:
        'Je nám to ľúto. Momentálne je príliš veľa žiadostí. Načítajte stránku znova a skúste to znova. Ak to pretrváva, skúste to znova neskôr.',
      invalid_captcha: 'Vyriešte výzvu a overte, či nie ste robot.',
      invalid_recaptcha: 'Začiarknutím políčka overíte, či nie ste robot.'
    },
    passwordless: {
      'bad.email': 'Neplatný e-mail',
      'bad.phone_number': 'Neplatné telefónne číslo',
      'lock.fallback': 'Ospravedlňujeme sa, niečo nie je v poriadku'
    },
    signUp: {
      invalid_password: 'Neplatné heslo.',
      'lock.fallback': 'Prepáčte, pokus o prihlásenie neprebehol v poriadku.',
      password_dictionary_error: 'Heslo je príliš všeobecné',
      password_no_user_info_error: 'Heslo je založené na užívateľských informáciách.',
      password_strength_error: 'Heslo je príliš slabé.',
      user_exists: 'Používateľ už existuje.',
      username_exists: 'Užívateľské meno už existuje.',
      social_signup_needs_terms_acception:
        'Ak chcete pokračovať, súhlaste so Zmluvnými podmienkami uvedenými nižšie.'
    }
  },
  success: {
    logIn: 'Ďakujeme za prihlásenie.',
    forgotPassword: 'Poslali sme vám e-mail na zmenu hesla.',
    magicLink: 'Poslali sme vám odkaz na prihlásenie<br />to %s.',
    signUp: 'Ďakujeme za registráciu.'
  },
  blankErrorHint: '',
  blankPasswordErrorHint: 'Nemôže byť prázdne',
  blankEmailErrorHint: 'Nemôže byť prázdne',
  blankUsernameErrorHint: 'Nemôže byť prázdne',
  blankCaptchaErrorHint: 'Nemôže byť prázdne',
  codeInputPlaceholder: 'Váš kód',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'alebo',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'alebo',
  emailInputPlaceholder: 'vas@priklad.sk',
  enterpriseLoginIntructions: 'Prihláste sa svojim firemným účtom.',
  enterpriseActiveLoginInstructions: 'Prosím zadajt údaju k svojmu firemnému účtu %s.',
  failedLabel: 'Chyba!',
  forgotPasswordTitle: 'Obnoviť heslo',
  forgotPasswordAction: 'Nepamätáte si svoje heslo?',
  forgotPasswordInstructions:
    'Prosím, zadajte e-mailovú adresu. Zašleme Vám e-mail pre resetovanie hesla.',
  forgotPasswordSubmitLabel: 'Poslať e-mail',
  invalidErrorHint: '',
  invalidPasswordErrorHint: 'Neplatné',
  invalidEmailErrorHint: 'Neplatné',
  invalidUsernameErrorHint: 'Neplatné',
  lastLoginInstructions: 'Naposledy prihlásený ako',
  loginAtLabel: 'Prihlásiť sa ako %s',
  loginLabel: 'Prihlásenie',
  loginSubmitLabel: 'Prihlásiť',
  loginWithLabel: 'Prihlásiť sa ako %s',
  notYourAccountAction: 'Nie je to váš účet?',
  passwordInputPlaceholder: 'Vaše heslo',
  passwordStrength: {
    containsAtLeast: 'Musí obsahovať aspoň %d z nasledujúcich %d druhov zankov:',
    identicalChars:
      'Je povolené maximálne %d rovnakých znakov za sebou (napr. "%s" nie je povoloné)',
    nonEmpty: 'Heslo nesmie byť prázdne',
    numbers: 'Čísla (napr. 0-9)',
    lengthAtLeast: 'Minimálna dĺžka je %d znakov',
    lowerCase: 'Malé písmená (a-z)',
    shouldContain: 'Malo by obsahovať:',
    specialCharacters: 'Špeciálne znaky (napr. !@#$%^&*)',
    upperCase: 'Veľké písmená (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'Buď, zadajte váš e-mail pre prihlásenie<br/>alebo vytvorte účet',
  passwordlessEmailCodeInstructions: 'E-mail s kódom bol odoslaný na adresu %s.',
  passwordlessEmailInstructions: 'Pre prihlásenie zadajte váš e-mail<br/>alebo vytvorte účet',
  passwordlessSMSAlternativeInstructions:
    'Buď, zadajte vaše telefónne číslo pre prihlásenie<br/>alebo vytvorte účet',
  passwordlessSMSCodeInstructions: 'Poslali sme Vám SMS s kódom na telefónne číslo %s.',
  passwordlessSMSInstructions:
    'Pre prihlásenie zadajte Vaše telefónne číslo<br/>alebo vytvorte účet',
  phoneNumberInputPlaceholder: 'Vaše telefónne číslo',
  resendCodeAction: 'Nedostali ste kód?',
  resendLabel: 'Poslať ešte raz',
  resendingLabel: 'Posielame...',
  retryLabel: 'Skúsiť znova',
  sentLabel: 'Odoslané!',
  signUpTitle: 'Prihlásiť sa',
  signUpLabel: 'Registrácia',
  signUpSubmitLabel: 'Registrovať sa',
  signUpWithLabel: 'Prihlásiť sa ako %s',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'Single Sign On povolené',
  submitLabel: 'Odoslať',
  unrecoverableError: 'Niečo sa pokazilo.<br />Prosím kontaktujte technickú podporu.',
  usernameFormatErrorHint: 'Použite %d-%d písmená, čísla a nasledujúce znaky: "_", ".", "+", "-"',
  usernameInputPlaceholder: 'Vaše užívateľské meno',
  usernameOrEmailInputPlaceholder: 'užívateľské meno/e-mail',
  title: 'Auth0',
  welcome: 'Vitajte %s!',
  windowsAuthInstructions: 'Ste pripojený z Vašej firemnej siete&hellip;',
  windowsAuthLabel: 'Windows autorizácia',
  mfaInputPlaceholder: 'Kód',
  mfaLoginTitle: 'Dvojfázové overenie',
  mfaLoginInstructions: 'Prosím zadajte verifikačný kód vygenerovaný vo Vašej mobilnej aplikácii.',
  mfaSubmitLabel: 'Prihlásiť',
  mfaCodeErrorHint: 'Použite %d číslic',
  showPassword: 'Prosím, použite svoj firemný e-mail na prihlásenie.',
  signUpTerms:
    'Registráciou vyjadrujete súhlas s našimi zmluvnými podmienkami a pravidlami ochrany osobných údajov.',
  captchaCodeInputPlaceholder: 'Zadajte vyššie uvedený kód',
  captchaMathInputPlaceholder: 'Vyriešte vyššie uvedený vzorec'
});
