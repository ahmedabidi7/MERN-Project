


const createCharge = async (tokenId, amount) => {
    let charge = {};
    try {
        charge = await stripe.charges.create({
            amount: amount,
            currency: 'usd',
            source: tokenId,
            description: 'My first payment'
        });
    } catch (error) {
        charge.error = error.message;
    }
    return charge;
}