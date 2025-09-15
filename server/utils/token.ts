import jsonwebtoken from 'jsonwebtoken';

export async function generateToken(email: string ) {
    try {
        const result = await jsonwebtoken.sign({ email }, process.env.JWT_SECRET as string, {
            expiresIn: '1y',
        });
        return result;
    } catch (e) {
        return e;
    }
}