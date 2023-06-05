import CryptoJS from "crypto-js";

const secretKey = "MySecretKey123";

const encryptDES = (plaintext) => {
  const ciphertext = CryptoJS.DES.encrypt(plaintext, secretKey).toString();
  return ciphertext;
};

const decryptDES = (ciphertext) => {
  const bytes = CryptoJS.DES.decrypt(ciphertext, secretKey);
  const decryptedPlaintext = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedPlaintext;
};

export { encryptDES, decryptDES, secretKey };
