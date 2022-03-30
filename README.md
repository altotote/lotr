<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lord of the rings quotes</title>
    <link rel="stylesheet" href="index.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=MedievalSharp&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <style>
        h1{
            font-family: MedievalSharp, serif;
        }
        h5{
            font-family: Cinzel, serif;
        }
    </style>
    <div class="container-fluid">
        <div class="row vid">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner fit">
                  <div class="carousel-item active" data-bs-interval="5000">
                    <img src="./assets/fondo1.jpg" class="d-block w-100 " alt="fondo1">
                  </div>
                  <div class="carousel-item" data-bs-interval="5000">
                    <img src="./assets/fondo2.png" class="d-block w-100" alt="fondo2">
                  </div>
                  <div class="carousel-item" data-bs-interval="5000">
                    <img src="./assets/fondo3.jpg" class="d-block w-100" alt="fondo3">
                  </div>
                </div>
            <div class="container-fluid overlay">
                <div class="row" style="height: 5vh;"></div>
                <div class="row">
                    <div>
                        <img src="./assets/logo.png" alt="lorLogo" style="height: 25vh; width: auto;" class="m-5">
                    </div>
                </div>
                <div class="row">
                    <div class="col-5 offset-3">
                        <h1 id="quote" class="">Here goes the quotes</h1>
                        <h5 id="charater">someone</h5>
                        <button onclick="getquote()" type="button" class="btn btn-outline-warning align-self-center">New Quote</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
</body>
<footer>
    <script src="index.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</footer>
</html>
