# Інструкція по налаштуванню S3

## Крок 1: Вимкнути Block Public Access

1. Перейдіть в AWS Console → S3 → bucket `roomy-ae`
2. Вкладка **Permissions**
3. **Block public access** → натисніть **Edit**
4. **Зніміть всі галочки** (вимкніть всі 4 опції)
5. Натисніть **Save changes**
6. Підтвердіть, написавши `confirm`

## Крок 2: Встановити Bucket Policy

1. У тій же вкладці **Permissions**, прокрутіть до **Bucket policy**
2. Натисніть **Edit**
3. **Видаліть все** що там є
4. **Скопіюйте вміст файлу `bucket-policy.json`** і вставте туди
5. Натисніть **Save changes**

## Крок 3: Налаштувати CORS

1. У вкладці **Permissions**, прокрутіть до **Cross-origin resource sharing (CORS)**
2. Натисніть **Edit**
3. **Видаліть все** що там є
4. **Скопіюйте вміст файлу `cors-config.json`** і вставте туди
5. Натисніть **Save changes**

## Крок 4: Перевірити доступ

Відкрийте в браузері одне з відео:
```
https://roomy-ae.s3.eu-west-3.amazonaws.com/fenix-showcase/videos/gambling/gambling_1.mp4
```

Якщо відео відкривається і відтворюється - все працює! ✅

## Крок 5: Оновити сайт

Після налаштування S3:
1. Відкрийте ваш сайт на Vercel
2. Зробіть жорстке оновлення: `Ctrl + Shift + R` (Windows) або `Cmd + Shift + R` (Mac)
3. Відео мають з'явитись

---

## Якщо відео все ще не працюють:

1. Перевірте що файли дійсно завантажені в S3:
   - AWS Console → S3 → bucket `roomy-ae`
   - Папка `fenix-showcase/videos/`
   - Має бути структура: `gambling/`, `betting/`, `e-com/`, `podcast/`

2. Перевірте URL відео в браузері (відкрийте один з URL вище)

3. Відкрийте Developer Console (F12) на сайті і подивіться чи є помилки CORS

