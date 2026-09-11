    <div class="content" id="coming-up">
        <h1>Coming up</h1>
        <div class="card-carousel-wrapper card-carousel-wrapper-agenda">
            <div id="archief-kaarten" class="card-carousel archive-card-carousel">
                <?php include __DIR__ . '/../layout/card.php'; ?>
                <?php include __DIR__ . '/../layout/card.php'; ?>
                <?php include __DIR__ . '/../layout/card.php'; ?>
                <?php include __DIR__ . '/../layout/card.php'; ?>
                <?php include __DIR__ . '/../layout/card.php'; ?>
                <?php include __DIR__ . '/../layout/card.php'; ?>
                <?php include __DIR__ . '/../layout/card.php'; ?>
            </div>
            <button id="bekijk_meer" class="card-info card-bekijk-alles card-bekijk-alles-agenda" type="button" aria-expanded="false" aria-controls="archief-kaarten">
                <div class="button-secondary">
                    <div class="button-secondary-content">
                        <span>Bekijk meer</span>
                        <img src="./assets/arrow_right.svg" alt="Arrow Right" class="arrow-right">
                    </div>
                    <hr style="height: 4px; background-color: black; border: none; margin: 0;">
                </div>
            </button>
        </div>
    </div>