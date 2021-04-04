import * as superagent from 'superagent'

type CallbackFunction = (data?: any) => void;
type ErrorCallback = (err: any, res: superagent.Response) => void;
type EndCallback = (data?: any) => void;

export const handleResponse = (callBack: CallbackFunction, errorCallBack?: ErrorCallback, endCallBack?: EndCallback) => (
    err: any, res: superagent.Response) => {
    try {
        if (err || !res.ok) {
            if (errorCallBack) {
                errorCallBack(err, res)
            }
        } else {
            callBack(res.body)
        }
    } catch (e) {
        console.error("Failed to process response", e)
    } finally {
        if (endCallBack) {
            endCallBack()
        }
    }
}
const timeout = 0;

export const get = (url: string, callBack: CallbackFunction, errorCallBack?: ErrorCallback, endCallBack?: EndCallback) => {
    superagent.get(url)
        .set('Accept', 'application/json')
        .timeout(timeout)
        .end(handleResponse(callBack, errorCallBack, endCallBack))
}