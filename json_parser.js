export default function json_parser(req, res, next) {
    req.body = {}

    if (req.headers['content-type'] === 'application/json') {
        let data = '';

        req.on('data', (chunk) => {
            data += chunk;
        })

        req.on('end', () => {
            try {
                req.body = JSON.parse(data);
                next();
            } catch (err) {
                //      ignore error
            } finally {
                next();
            }
        })
    } else {
        next();
    }


}