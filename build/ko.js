Auth0.registerLanguageDictionary('ko', {
  error: {
    forgotPassword: {
      too_many_requests:
        '비밀번호 변경 요청 횟수가 제한을 초과하였습니다. 시간을 두고 나중에 다시 시도해 주세요.',
      'lock.fallback': '죄송합니다. 특정 오류로 인해 비밀번호 변경에 실패하였습니다.',
      enterprise_email:
        '이메일 도메인은 엔터프라이즈 ID 제공 업체의 일부입니다. 암호를 재설정하려면 보안 관리자에게 문의하십시오.'
    },
    login: {
      blocked_user: '차단된 사용자 계정입니다.',
      invalid_user_password: '비밀번호가 일치하지 않습니다.',
      'lock.fallback': '죄송합니다. 특정 오류로 인해 로그인에 실패하였습니다.',
      'lock.invalid_code': '유효하지 않은 코드',
      'lock.invalid_email_password': '이메일 주소 또는 비밀번호가 틀립니다.',
      'lock.invalid_username_password': '사용자명 또는 비밀번호가 틀립니다.',
      'lock.network': '서버와의 연결에 실패하였습니다. 다시 시도해 주세요.',
      'lock.popup_closed': '팝업창이 닫혔습니다. 다시 시도해 주세요.',
      'lock.unauthorized': '권한이 없습니다. 다시 시도해 주세요.',
      'lock.mfa_registration_required':
        '다단계 인증이 필요하지만, 디바이스가 등록되어 있지 않습니다. 먼저 디바이스를 등록하여 주세요.',
      'lock.mfa_invalid_code': '유효하지 않은 코드입니다. 다시 시도해 주세요.',
      password_change_required:
        '처음 로그인하거나, 또는 비밀번호의 기한이 만료되어 비밀번호를 갱신해야 합니다.',
      password_leaked:
        '본 계정은 외부 접근으로 인한 회원 정보 유출이 우려되어, 보안 상의 문제로 비활성화되었습니다. 계정을 다시 활성화하는 방법은 자동 전송된 이메일에 안내되어 있습니다.',
      too_many_attempts: '본 계정은 단시간에 복수의 로그인 시도가 감지되어 차단되었습니다.',
      session_missing:
        '인증 요청이 완료되지 않았습니다. 열려있는 모든 다이얼로그 창을 닫고 다시 시도해 주시기 바랍니다.',
      'hrd.not_matching_email': '로그인하려면 회사 이메일을 사용하십시오.',
      too_many_requests:
        '우리가 미안해. 지금 요청이 너무 많습니다. 페이지를 새로 고침하고 다시 시도하십시오. 문제가 지속되면 나중에 다시 시도하십시오.',
      invalid_captcha: '로봇이 아닌 사람인지 확인하기 위해 챌린지 질문을 해결하십시오.',
      invalid_recaptcha: '로봇이 아닌지 확인하려면 확인란을 선택하십시오.'
    },
    passwordless: {
      'bad.email': '이메일 주소가 유효하지 않습니다',
      'bad.phone_number': '전화번호가 유효하지 않습니다',
      'lock.fallback': '죄송합니다. 오류가 발생하였습니다'
    },
    signUp: {
      invalid_password: '비밀번호가 유효하지 않습니다.',
      'lock.fallback': '죄송합니다. 특정 오류로 인하여 회원가입에 실패하였습니다.',
      password_dictionary_error: '비밀번호가 너무 간단합니다.',
      password_no_user_info_error: '비밀번호에 사용자명이 포함되어 있습니다.',
      password_strength_error: '비밀번호가 너무 약합니다.',
      user_exists: '이미 존재하는 사용자입니다.',
      username_exists: '이미 존재하는 사용자명입니다.',
      social_signup_needs_terms_acception: '계속하려면 아래 서비스 약관에 동의하십시오.'
    }
  },
  success: {
    logIn: '로그인에 성공하였습니다.',
    forgotPassword: '비밀번호를 초기화하기 위한 안내 이메일을 보내드렸습니다.',
    magicLink: '%s로 로그인하기 위한 링크가 전송되었습니다.',
    signUp: '회원가입이 완료되었습니다.'
  },
  blankErrorHint: '',
  blankPasswordErrorHint: '입력란을 공백으로 둘 수 없습니다',
  blankEmailErrorHint: '입력란을 공백으로 둘 수 없습니다',
  blankUsernameErrorHint: '입력란을 공백으로 둘 수 없습니다',
  blankCaptchaErrorHint: '입력란을 공백으로 둘 수 없습니다',
  codeInputPlaceholder: '코드 입력',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: '또는',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: '또는',
  emailInputPlaceholder: 'your@example.com',
  enterpriseLoginIntructions: '기업 자격 증명으로 로그인하여 주세요.',
  enterpriseActiveLoginInstructions: '%s 의 자격 증명 정보를 입력하여 주세요.',
  failedLabel: '실패하였습니다.',
  forgotPasswordTitle: '비밀번호를 초기화하기',
  forgotPasswordAction: '비밀번호를 잊어버리셨나요?',
  forgotPasswordInstructions:
    '이메일 주소를 입력해 주세요. 비밀번호 초기화를 위한 안내 메일을 보내드립니다.',
  forgotPasswordSubmitLabel: '메일 전송',
  invalidErrorHint: '',
  invalidPasswordErrorHint: '오류',
  invalidEmailErrorHint: '오류',
  invalidUsernameErrorHint: '오류',
  lastLoginInstructions: '최종 로그인',
  loginAtLabel: '%s 로그인',
  loginLabel: '로그인',
  loginSubmitLabel: '로그인',
  loginWithLabel: '%s 로그인',
  notYourAccountAction: '당신의 계정이 아닌가요?',
  passwordInputPlaceholder: '비밀번호',
  passwordStrength: {
    containsAtLeast: '%d 이/가 포함되어 있습니다:',
    identicalChars:
      '연속한 동일 문자는 ％d개까지만 사용할 수 있습니다 (예: "％s "는 사용할 수 없습니다)',
    nonEmpty: '비밀번호가 필요합니다',
    numbers: '숫자 (i.e. 0-9)',
    lengthAtLeast: '%d 자 이상',
    lowerCase: '소문자 (a-z)',
    shouldContain: '포함되어야 할 것:',
    specialCharacters: '특수문자 (e.g. !@#$%^&*)',
    upperCase: '대문자 (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    '이메일 주소를 입력하거나<br/>또는 새로운 계정을 만들어 주세요.',
  passwordlessEmailCodeInstructions: '％s 로 코드가 적힌 이메일을 전송하였습니다.',
  passwordlessEmailInstructions:
    '이메일 주소를 입력하여 로그인하거나<br/>또는 새로운 계정을 만들어 주세요.',
  passwordlessSMSAlternativeInstructions:
    '전화번호를 입력하여 로그인하거나<br/>또는 새로운 계정을 만들어 주세요.',
  passwordlessSMSCodeInstructions: '%s 로 코드가 적힌 SMS를 전송하였습니다.',
  passwordlessSMSInstructions:
    '전화번호를 입력하여 로그인하거나<br/>또는 새로운 계정을 만들어 주세요.',
  phoneNumberInputPlaceholder: '전화번호',
  resendCodeAction: '코드를 전송받지 못하셨나요?',
  resendLabel: '재전송하기',
  resendingLabel: '재전송중...',
  retryLabel: '재시도',
  sentLabel: '전송완료',
  signUpTitle: '회원가입',
  signUpLabel: '회원가입',
  signUpSubmitLabel: '회원가입',
  signUpWithLabel: '%s로 회원가입',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: '통합 인증이 유효합니다.',
  submitLabel: '전송',
  unrecoverableError: '오류가 발생하였습니다.<br />고객센터로 연락하여 주시기 바랍니다.',
  usernameFormatErrorHint: '%d-%d 문자, 숫자 및 다음 문자를 사용하십시오 : "_", ".", "+", "-"',
  usernameInputPlaceholder: '사용자명',
  usernameOrEmailInputPlaceholder: '사용자명/이메일 주소',
  title: 'Auth0',
  welcome: '환영합니다, %s!',
  windowsAuthInstructions: '기업 네트워크로 접속되어 있습니다&hellip;',
  windowsAuthLabel: 'Windows 인증',
  mfaInputPlaceholder: '코드',
  mfaLoginTitle: '2단계 인증',
  mfaLoginInstructions: '스마트폰 어플리케이션으로 생성된 확인 코드를 입력하여 주세요.',
  mfaSubmitLabel: '로그인',
  mfaCodeErrorHint: '%d 숫자를 사용하여 주세요.',
  showPassword: '암호 표시',
  signUpTerms: '가입하면 서비스 약관 및 개인 정보 취급 방침에 동의하게됩니다.',
  captchaCodeInputPlaceholder: '위에 표시된 코드를 입력하십시오',
  captchaMathInputPlaceholder: '위에 표시된 공식을 해결'
});
