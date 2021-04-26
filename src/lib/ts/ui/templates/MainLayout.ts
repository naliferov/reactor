export default class MainLayout {

    build(app: string, state: string) {
        return `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Сайт Николая Алиферова. Заметки о программировани и философии.">
    
    <title>Николай Алиферов</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/build/min.css">
    <link rel="icon" type="image/png" href="/image/favicon.png">
</head>
<body>
    <app id="app">${app}</app>
    <script>window.__STATE__ = ${state}</script>
    <script async src="/build/min.js"></script>
</body>
</html>
`.trim()
    }
}