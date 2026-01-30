import bcrypt from 'bcryptjs'

export const hashpassword = async (password) => { // guru
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
    // hashdbansbuodb^m sljdfoin#
}

export const passwordCheck = async (password, hashpassword) => {
    return await bcrypt.compare(password, hashpassword);
}