import bcrypt from 'bcrypt';

// Function to encrypt a password
async function encryptPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

// Function to compare a password with its hash
async function comparePassword(password: string, hash: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
}

export { encryptPassword, comparePassword };