import * as Haptics from 'expo-haptics';

async function sendHaptic() {
    Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success
    )
}

module.exports = { sendHaptic };