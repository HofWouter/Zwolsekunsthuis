<!DOCTYPE HTML>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>'t Zwolse kunsthuis</title>
</head>
<body>
<?php include __DIR__ . '/UI-elements/nav-bar.php'; ?>
<div class="first">
    <div class="header-agenda-buttons">
        <a href="./agenda-page.php"><h1 class="header-agenda-button">Agenda</h1></a>
        <a href="./archief-page.php"><h1 style="color: #D3D3D3;" class="header-agenda-button">Archief</h1></a>
    </div>
    <div class="header header-height">
    <?php include __DIR__ . '/UI-elements/header.php'; ?>
    </div>
</div>
<?php include __DIR__ . '/UI-elements/agenda-block.php'; ?>
<?php include __DIR__ . '/layout/footer.php'; ?>
<script src="./UI-elements/nav-bar.js"></script>
</body>