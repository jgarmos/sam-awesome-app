exports.lambdaHandler = async (event, context) => {
    try {
        console.info('😄😄 event 😄😄', event);
        
        let result = event.num1 + event.num2;
        console.info('😄😄 result 😄😄', result);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result,
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
