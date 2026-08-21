<!DOCTYPE HTML>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>'t Zwolse kunsthuis</title>
</head>
<body>
<?php include __DIR__ . '/UI-elements/nav-bar.php'; ?>
<div class="first header header-expo header-spacing header-product">
    <div class=header-text-product>
        <div class="header-text header-text-expo header-text-product">
            <div class=header-text-wrapper>
                <h1>Een feest waarbij velen sterven</h1>
                <h4>Gideon Eilert</h4>
            </div>
            <div class="header-info">
                <div class=header-text-wrapper>
                    <h6>FOTO</h6>
                    <h6>ABSTRACT</h6>
                </div>
            </div>
            <p>De installatie Circuits van de Amsterdamse ontwerp-collectief Experimental Jetset is speciaal ontworpen voor de omloop bovenaan de historische trap van het museum. Circuits laat zien hoe informatie ooit letterlijk een fysieke vorm had: geluid, beeld en andere data werden opgeslagen op tastbare dragers.</p>
            
        </div> 
        <button class="button-primary product-request-button">Vraag aan</button>
        </div>
        <div class="product-carousel-position">
            <div class="header-image-wrapper">
                <img src="./assets/placeholder_image.jpg" alt="Header Image" class="header-image">
                <p class="overlay-text">Lorem ipsum dolor sit amet</p>  
            </div>
            <div class="product-image-controls">
                <button class="product-image-control">
                    <img src="./assets/chevron-left.png">
                </button>
                <button class="product-image-control product-image-control-next">
                    <img src="./assets/chevron-right.png">
                </button>
            </div>
        </div>
</div>
<?php include __DIR__ . '/UI-elements/nieuws-block.php'; ?>
<?php include __DIR__ . '/layout/footer.php'; ?>
</body>