    <nav aria-label="Hoofdnavigatie">
    <div>
        <div class="nav-bar">
            <a href="./index.php" class="nav-logo">
            <img src="./assets/logo.svg" alt="Logo" class="logo">
            </a>
            <div class="nav-links-container" id="mobile-nav-panel">
                <div class="nav-links">
                    <a href="./expositie-page.php" class="nav-link">Agenda</a>
                    <a href="./over-page.php" class="nav-link">Atelierhouders</a>
                    <a href="./over-page.php" class="nav-link">Over</a>
                    <a href="./over-page.php" class="nav-link">Vrijwilligers</a>
                    <a href="./product-page.php" class="nav-link">Shop</a>
                </div>
                <div class="nav-menu">
                    <div class="nav-menu-sub">
                        <div class="nav-menu-link">
                                <a href="./expositie-page.php" class="nav-menu-link">Nu te zien</a>
                                <a href="./expositie-page.php" class="nav-menu-link">Coming up</a>
                                <a href="./expositie-page.php" class="nav-menu-link">Voorgaand</a>
                        </div>
                        <div class="nav-menu-link">
                                <a href="./product-page.php" class="nav-menu-link">Elyne Dunning</a>
                                <a href="./product-page.php" class="nav-menu-link">Jonatan Ivgi</a>
                                <a href="./product-page.php" class="nav-menu-link">Ilyj Ivgi</a>
                        </div>
                    </div>
                    <?php include __DIR__ . '/../layout/contact-details.php'; ?>
                </div>
            </div>
            <button class="menu" id="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav-panel" aria-label="Open menu">
                <img src="./assets/Menu.svg" alt="Menu" class="menu-icon">
            </button>
        </div>
        <hr class="nav-bar-line">
    </div>
    </nav>
    <script src="./UI-elements/nav-bar.js"></script>