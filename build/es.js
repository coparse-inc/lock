Auth0.registerLanguageDictionary('es', {
  error: {
    forgotPassword: {
      too_many_requests:
        'Se ha alcanzado el límite de intentos para restablecer su contraseña. Por favor, aguarde unos minutos.',
      'lock.fallback': 'Ocurrió un error al restablecer su contraseña.',
      enterprise_email:
        'El dominio de su correo electrónico es parte de un proveedor de identidad Enterprise. Para restablecer su contraseña, consulte a su administrador de seguridad.'
    },
    login: {
      blocked_user: 'El usuario se encuentra bloqueado.',
      invalid_user_password: 'Credenciales inválidas.',
      invalid_captcha: 'El texto ingresado es incorrecto. <br /> Por favor, vuelva a intentarlo.',
      'lock.fallback': 'Ocurrió un error al iniciar sesión.',
      'lock.invalid_code': 'Código inválido.',
      'lock.invalid_email_password': 'Correo y contraseña inválidos.',
      'lock.invalid_username_password': 'Usuario y contraseña inválidos.',
      'lock.network': 'Ocurrió un error de red. Por favor, verifique su conexión.',
      'lock.popup_closed': 'Se ha cerrado la ventana emergente.',
      'lock.unauthorized': 'Acceso denegado. Por favor, intente nuevamente.',
      password_change_required:
        'Debe actualizar su contraseña porque es la primera vez que ingresa o porque la contraseña está vencida.',
      password_leaked:
        'Este intento ha sido bloqueado ya que usted utilizó la misma contraseña para registrarse en otra aplicación que tuvo una filtración reciente de datos. Hemos enviado un email con instrucciones para desbloquear la cuenta.',
      too_many_attempts:
        'Su cuenta ha sido bloqueada luego de múltiples intentos de inicio de sesión consecutivos.',
      'lock.mfa_registration_required':
        'Se requiere autenticación de dos factores. Por favor registre su dispositivo antes de continuar.',
      'lock.mfa_invalid_code': 'Código incorrecto. Por favor vuelva a intentarlo.',
      session_missing:
        'No es posible completar el proceso de Autenticación. Por favor, cierre todas las ventanas e intente nuevamente.',
      'hrd.not_matching_email': 'Por favor, use sus credenciales corporativas.',
      too_many_requests:
        'Lo sentimos. Hay demasiados peticiones en estos momentos. Por favor, recargue la página y vuelva a intentarlo. Si persiste, por favor vuelva a intentarlo más tarde.',
      invalid_recaptcha: 'Seleccione la casilla de verificación para verificar que no es un robot.'
    },
    passwordless: {
      'bad.email': 'Correo inválido',
      'bad.phone_number': 'Teléfono inválido',
      'lock.fallback': 'Ocurrió un error durante el envío'
    },
    signUp: {
      invalid_password: 'La contraseña es inválida.',
      'lock.fallback': 'Ocurrió un error durante el registro.',
      password_dictionary_error: 'La constraseña es muy común.',
      password_no_user_info_error: 'La constraseña es similar a los datos del usuario.',
      password_strength_error: 'La contraseña es muy débil.',
      user_exists: 'El usuario ya existe.',
      username_exists: 'El nombre de usuario se encuentra en uso.',
      social_signup_needs_terms_acception: 'Acepte los Términos de Servicio para continuar.'
    }
  },
  success: {
    logIn: 'Sesión iniciada con éxito.',
    forgotPassword: 'Hemos enviado un correo para completar el restablecimiento de su contraseña.',
    magicLink: 'Hemos enviado un correo para inciar sesión a<br />to %s.',
    signUp: 'Registro completado exitosamente.'
  },
  blankErrorHint: '',
  blankPasswordErrorHint: 'Requerido',
  blankEmailErrorHint: 'Requerido',
  blankUsernameErrorHint: 'Requerido',
  blankCaptchaErrorHint: 'Requerido',
  codeInputPlaceholder: 'código',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'o',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'o',
  emailInputPlaceholder: 'correo@ejemplo.com',
  captchaCodeInputPlaceholder: 'Introduzca el código de arriba',
  captchaMathInputPlaceholder: 'Resuelva la formula de arriba',
  enterpriseLoginIntructions: 'Inicie sesión con sus credenciales corporativas.',
  enterpriseActiveLoginInstructions: 'Ingrese las credenciales corporativas de %s.',
  failedLabel: 'Error!',
  forgotPasswordTitle: 'Restablecer contraseña',
  forgotPasswordAction: '¿Olvidó su contraseña?',
  forgotPasswordInstructions:
    'Por favor ingrese su dirección de correo. Le enviaremos las instrucciones para restablecer su contraseña.',
  forgotPasswordSubmitLabel: 'Enviar email',
  invalidErrorHint: '',
  invalidPasswordErrorHint: 'Inválido',
  invalidEmailErrorHint: 'Inválido',
  invalidUsernameErrorHint: 'Inválido',
  lastLoginInstructions: 'La última vez inició sesión con',
  loginAtLabel: 'Iniciar en %s',
  loginLabel: 'Iniciar sesión',
  loginSubmitLabel: 'Iniciar sesión',
  loginWithLabel: 'Iniciar con %s',
  notYourAccountAction: '¿No es su cuenta?',
  passwordInputPlaceholder: 'su contraseña',
  passwordStrength: {
    containsAtLeast: 'Contener al menos %d de los siguientes %d tipos de caracteres:',
    identicalChars: 'No más de %d caracteres idénticos juntos (ej., "%s" no está permitido)',
    nonEmpty: 'Se requiere una contraseña no vacía',
    numbers: 'Números (ej. 0-9)',
    lengthAtLeast: 'Como mínimo de %d caracteres de longitud',
    lowerCase: 'Letras minúsculas (a-z)',
    shouldContain: 'Debe contener:',
    specialCharacters: 'Caracteres especiales (ej. !@#$%^&*)',
    upperCase: 'Letras mayúsculas (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'También puede ingresar su email<br/>para iniciar sesión o registrarse',
  passwordlessEmailCodeInstructions: 'Se ha enviado un correo con el código a %s.',
  passwordlessEmailInstructions: 'Ingrese su email para iniciar sesión<br/>o registrarse',
  passwordlessSMSAlternativeInstructions:
    'También puede ingresar su teléfono<br/>para iniciar sesión o registrarse',
  passwordlessSMSCodeInstructions: 'Se ha enviado un SMS con el código a %s.',
  passwordlessSMSInstructions: 'Ingrese su teléfono para iniciar sesión<br/>o registrarse',
  phoneNumberInputPlaceholder: 'número de teléfono',
  resendCodeAction: '¿No recibió el código?',
  resendLabel: 'Reenviar',
  resendingLabel: 'Reenviando...',
  retryLabel: 'Reintentar',
  sentLabel: 'Enviado!',
  signUpTitle: 'Registrarse',
  signUpLabel: 'Registrarse',
  signUpSubmitLabel: 'Registrarse',
  signUpWithLabel: 'Registrarse con %s',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'Inicio de sesión único activado',
  submitLabel: 'Enviar',
  unrecoverableError: 'Ocurrió un error.<br />Por favor, contacte a nuestro soporte técnico.',
  usernameFormatErrorHint:
    'Use %d-%d letras, números y los siguientes caracteres: "_", ".", "+", "-"',
  usernameInputPlaceholder: 'su usuario',
  usernameOrEmailInputPlaceholder: 'usuario/correo electrónico',
  title: 'Auth0',
  welcome: 'Bienvenido %s!',
  windowsAuthInstructions: 'Usted se encuentra conectado desde su red corporativa&hellip;',
  windowsAuthLabel: 'Autenticación de Windows',
  mfaInputPlaceholder: 'Código',
  mfaLoginTitle: 'Segundo Factor',
  mfaLoginInstructions:
    'Por favor ingrese el código de verificación generado por su aplicación móvil.',
  mfaSubmitLabel: 'Enviar',
  mfaCodeErrorHint: '%d números',
  showPassword: 'Mostrar contraseña',
  signUpTerms: 'Al suscribirse usted acepta nuestros términos de servicio y política de privacidad.'
});
