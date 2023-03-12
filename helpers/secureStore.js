import * as SecureStore from 'expo-secure-store';

export async function createItem(key, value) {
    await SecureStore.setItemAsync(key, value);
}

export async function getItem(key) {
    let returnVal = await SecureStore.getItemAsync(key);
    return returnVal;
}

export async function removeItem(key) {
    await SecureStore.deleteItemAsync(key);
}