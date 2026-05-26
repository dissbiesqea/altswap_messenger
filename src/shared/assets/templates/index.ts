import ru_TwoFADisable from './ru_2faDisable.eta' with { type: 'file' }
import ru_TwoFAEnable from './ru_2faEnable.eta' with { type: 'file' }
import ru_changePassword from './ru_changePassword.eta' with { type: 'file' }
import ru_recoveryPassword from './ru_recoveryPassword.eta' with { type: 'file' }
import ru_signUpConfirm from './ru_signUpConfirm.eta' with { type: 'file' }
import ru_referralRequestApprove from './ru_referralRequestApprove.eta' with { type: 'file' }
import ru_referralRequestCreate from './ru_referralRequestCreate.eta' with { type: 'file' }
import ru_referralRequestError from './ru_referralRequestError.eta' with { type: 'file' }
import ru_referralRequestSuccess from './ru_referralRequestSuccess.eta' with { type: 'file' }
import ru_requestPreliminary from './ru_requestPreliminary.eta' with { type: 'file' }
import ru_requestCreated from './ru_requestCreated.eta' with { type: 'file' }
import ru_requestDelete from './ru_requestDelete.eta' with { type: 'file' }
import ru_requestError from './ru_requestError.eta' with { type: 'file' }
import ru_requestFreeze from './ru_requestFreeze.eta' with { type: 'file' }
import ru_requestLost from './ru_requestLost.eta' with { type: 'file' }
import ru_requestSuccess from './ru_requestSuccess.eta' with { type: 'file' }
import ru_verifySuccess from './ru_verifySuccess.eta' with { type: 'file' }
import ru_verifyFail from './ru_verifyFail.eta' with { type: 'file' }
import ru_test from './ru_test.eta' with { type: 'file' }

import en_TwoFADisable from './en_2faDisable.eta' with { type: 'file' }
import en_TwoFAEnable from './en_2faEnable.eta' with { type: 'file' }
import en_changePassword from './en_changePassword.eta' with { type: 'file' }
import en_recoveryPassword from './en_recoveryPassword.eta' with { type: 'file' }
import en_signUpConfirm from './en_signUpConfirm.eta' with { type: 'file' }
import en_referralRequestApprove from './en_referralRequestApprove.eta' with { type: 'file' }
import en_referralRequestCreate from './en_referralRequestCreate.eta' with { type: 'file' }
import en_referralRequestError from './en_referralRequestError.eta' with { type: 'file' }
import en_referralRequestSuccess from './en_referralRequestSuccess.eta' with { type: 'file' }
import en_requestPreliminary from './en_requestPreliminary.eta' with { type: 'file' }
import en_requestCreated from './en_requestCreated.eta' with { type: 'file' }
import en_requestDelete from './en_requestDelete.eta' with { type: 'file' }
import en_requestError from './en_requestError.eta' with { type: 'file' }
import en_requestFreeze from './en_requestFreeze.eta' with { type: 'file' }
import en_requestLost from './en_requestLost.eta' with { type: 'file' }
import en_requestSuccess from './en_requestSuccess.eta' with { type: 'file' }
import en_verifySuccess from './en_verifySuccess.eta' with { type: 'file' }
import en_verifyFail from './en_verifyFail.eta' with { type: 'file' }
import en_test from './en_test.eta' with { type: 'file' }

export const templates: Record<string, string> = {
	'ru_2faDisable': ru_TwoFADisable,
	'ru_2faEnable': ru_TwoFAEnable,
	ru_changePassword,
	ru_recoveryPassword,
	ru_signUpConfirm,
	ru_referralRequestApprove,
	ru_referralRequestCreate,
	ru_referralRequestError,
	ru_referralRequestSuccess,
	ru_requestPreliminary,
	ru_requestCreated,
	ru_requestDelete,
	ru_requestError,
	ru_requestFreeze,
	ru_requestLost,
	ru_requestSuccess,
	ru_verifySuccess,
	ru_verifyFail,
	ru_test,

	'en_2faDisable': en_TwoFADisable,
	'en_2faEnable': en_TwoFAEnable,
	en_changePassword,
	en_recoveryPassword,
	en_signUpConfirm,
	en_referralRequestApprove,
	en_referralRequestCreate,
	en_referralRequestError,
	en_referralRequestSuccess,
	en_requestPreliminary,
	en_requestCreated,
	en_requestDelete,
	en_requestError,
	en_requestFreeze,
	en_requestLost,
	en_requestSuccess,
	en_verifySuccess,
	en_verifyFail,
	en_test,
}
