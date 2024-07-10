import { base } from '$app/paths';

const path = (file: string) => `${base}/screenshots/${file}`;

export const ScreenshotsAssets = {
    // CafeApp
    cafeLightAndDarkMode: path('CafeApp/DarkandLightMode.jpeg'),
    cafeNewOrder: path("CafeApp/NewOrder.jpeg"),
    cafeOpen: path("CafeApp/Open.jpeg"),
    cafeReadyToPickup: path("CafeApp/ReadyToPickup.jpeg"),
    cafeSettingsWithUserManagement: path("CafeApp/SettingsWithUserManagement.jpeg"),
    cafeStatistics: path("CafeApp/Statistics.jpeg"),
    cafeInventoryManagement: path("CafeApp/InventoryManagement.png"),

    // Dashboard
    dashboardR: path("ShinyDashboardinR/Dashboard.png"),

    // Telegram-Bot
    telegramBotExerciseFiles: path("TelegramBot/ExerciseFiles.png"),
    telegramBotExerciseFilesMP3: path("TelegramBot/ExerciseMP3.png"),
    telegramBotHelp: path("TelegramBot/Help.jpeg"),
    telegramBotManageKeys: path("TelegramBot/ManageKeys.jpeg"),




}