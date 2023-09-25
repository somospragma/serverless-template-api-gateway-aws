exports.handler = function (event, context) {
    const STATUS_CODE_OK = 200
    const allowed = '*'
    const response = {
        statusCode: STATUS_CODE_OK,
        body: JSON.stringify({})
    };


    response.headers = {
        "Access-Control-Allow-Headers": "Authorization, Content-Type, x-dtpc, x-dtreferer, x-host",
        "Access-Control-Allow-Methods": "GET,OPTIONS,HEAD,GET,PUT,POST,DELETE,PATCH",
        "Access-Control-Allow-Credentiasl": "true",
        "Access-Control-Allow-Origin": allowed,
        "Cache-Control": "no-store",
        "Content-Security-Policy": "frame-ancestors 'none'",
        "Strict-Transport-Security": "max-age=31536000; includeSubdomains; preload",
        "Content-Type": "application/json",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "SAMEORIGIN"
    }
    context.succeed(response);

};