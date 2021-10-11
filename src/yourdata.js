// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import myPhoto from "./images/gt.jpg"
import javaIcon from "./images/java.png"
import ocamlIcon from "./images/ocaml.png"
import pythonIcon from "./images/python.jpeg"
import rubyIcon from "./images/ruby.jpeg"
import matlabIcon from "./images/matlab.png"
import linkedinIcon from "./images/linkedin.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Tejan",
  headerTagline: [
    //Line 1 For Header
    "Student",
    //Line 2 For Header
    "University of Maryland",
    //Line 3 For Header
    "Software Engineer",
  ],
  //   Header Paragraph
  headerParagraph:
    `Learning. Building. Innovating.`,

  //Contact Email
  contactEmail: "tejangandhi@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Neural Network classifier", //Project Title - Add Your Project Title Here
      para:
        ` I developed a Multilayer perceptron Neural Network from scratch using NumPy 
        to Classify digits of MNIST set. Implemented the math behind greadient descent learning 
        algorithm using various NumPy library features.`, // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwn7u7U-_2CKE2M5xa2nJzdPVAy0DTEfZGQ&usqp=CAU",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/tdgandhi/Classifier",
    },
    {
      title: "Regular Expression Engine", //Project Title - Add Your Project Title Here
      para:
        `Designed a program that finds specified patterns in strings (words or sentences) using OCaml.
        The program first takes patterns to identify in a string, converts them into a graph based structure Finite Automation,
        and accepts strings to match, to pass into the structure.
        Note: \n\nThis is an academic project
        Please reach out to me to see the code.`, // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "",
    },
    {
      title: "Hand Cricket Game (In Progress)", //Project Title - Add Your Project Title Here
      para:
        `I'm currently working on a game that lets you play hand cricket with friends
        over the internet.`, // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYZGRgaGCEaHBwcHCQeHBgaHBgaHBocGh4hIS4lHiErHxoYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHzYrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAEYQAAIBAgQCBgUJBgQFBQAAAAECEQADBBIhMUFRBSJhcZGhExQyUoEGQmKSscHR4fAVI1OCotIzcuLxVGOTssIWJCVD0//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAKREAAgIBBAIBAwQDAAAAAAAAAAECERIDITFRE0FhBCJxFIGRwRUyUv/aAAwDAQACEQMRAD8A8ibFOd3Y/GjXnIEyZIXX+WpesWv+H/ram9bUnW3K6ALmIiBA1GtSjSKwut7zeNHx93NlbmPsJE+VTF+1/wAP2e22/hQ791SQMpUDSJniTv8AGgRZxOl/bNAQxwMIuh76F6YMzsoAXKSBAEDMoiidJXFW8Trsv/YtMly0JGR5K6gHhoeXYKBkBczA9hX/AMqG1vMxGxGY7cBRGvIBCIwkjczMTt41r2sGI3PHTT5wI3iaiRG9i10Lamwmo2bv9tuyrYtwdx5/hUMHaW3aVc40BGrAbux59tS9IvB1P8w/GuiOTEbfaPP8KLiLZzGCOP8A3tQGccx4ij4lwXaCDvsZ+caoAFDzHjT27ZzLtueI91qkJ7albHXWefHuIoQWJtnO23tHiOdDNs9niPxo18SzHhmMeNQyHt8KUBWkMPt7PMdtDKN2eI/Gj2xo88VEedQ9EeR8KUARtnn/AFD8axflCIyTro3GeK1v+ib3W8DWJ8oUAKBiV0Y6jtXh8KkuDUeTBuDbu+4VdxUBbcif3A87jVXaCfa08OH5VrNhs7W1BH+Cnk5NYR1a2KXV9CDlEG5ESfd33qreGiQI6sx/M34V0K9DdQKSCA5fiAQVgDQz/tWVjcJlZVkdVQO/rMdqNUSO7B4oAW7IPuHzuPTYgjNe04x/WKsX7SkWgXCxbB1BM/vLh4ULFBeuVcMXaYgiOtOs0FbhLy6J/mFM1uwTOdNdfn/2GmYggdZd5OtA/Z5/iWvripE1MP6OzBHpEgkHd+E/8rtNRNiz/EX6z/8A40I9HH+Ja/6i1E4BvftnuuL+NaMF9x++eO2O6si97Td5+2tdSM7GQVO2vjVA4Ukk50GvFoNZjydJf6oa4ICf5f8Azb8KPiMKxS24UtKmYExDtvG0yPOlctgwM66LwMiZY/fW50a2bDZesYkEqpYwxcD2ROkTPdVRl8I5f1d/df6ppV2b4q7Omb/oP/bSrVGLMd8J6w8WoCgGJUjbjKqeMHXkap3FW25UqWynrZZ0iA3tKOM7gffXoln0KiFZQBppkAA+AFDu4PDNqVtkkkEwgJmCQTx4H491KGRwNiwrscysqxIKhpJBA5EDetD1CwLDXSWGViCCwLEiQqj93GsfCumxzIxCEs2uaQy6aiRoDodAewVRxVqyqsqqVA1IXJrtqcyGeJ1njSkMmYPTGGXNntuDmVTqfmkaEDKIGi9stsKWGwTFVKsJOhIAkZQNBqG23AG+la6dF2WLv1zqVZSyx7KN1YXu8auXOjkyEB2AyMMqsuk7x1d+E0r4LdLk5O7aaBJBymCRqBIVQTtprE6axV2zfgQzweOYopnuOorRTA2l6kuZBaZUnVcvu8APM07dA2nCtnuSSV3WNACT7PaagbRkdIAsqwQyyC2qnTNGkHXcaVUGHgBkcHq8YWCI0MnXQExv2V0mF6Atlki5dCuY+aD1crHzjhVX1CybaqpdZ68iJJiNRmjZgNAKqJZjWOj1ZDca4RDZYyjUnXSWHbw0g8qBdGYswDEuCTtBIbMxB5bcK6U9HIsKHYqqB4yqwYlXBbV9TqTG2g0NSwnQyEquZjlE+wNfZgzmMc/hw4wWc9a6Jdp6saBtxMHjE7dsxRhgvQusgljpsBlkEa6nhrvXRPgEZnQu8kZJKjqwCN82g1qni8AjvK3XGa4dco1KqdSc4GykaAd1WhZkYro5MrOrQq89c20ARx13O9ZVwLwPlXc9D9GJbgklpUjrIpHV1HEnidjqCKo3ujpP+M2hynKuUEkgEwH4tJ+NGhZg4C0GR1nVmWNCZy5i0QNTEGKLf6HKyxzKuYhQRrA1DHsiuiXoZ7YL+nb2SAckkZ4Wfb5afGoJbg5mvSAGWGTQhEJynrbAK9KFmAnQ9yQBauOCYzBGA33GnnVrHdCOmXqMVEk6HSSojUDXj8K3EkAqXU5UZfZI0f2fAjTsoGJts5UPcUi3lGgK6xqTCalgV8O2lCzFvYZIMAdVVBhdQ85chkROup5xVm45RkuApGRE1Dk6AmYCxwOk8Kv4Hoy0pQFpjNIK5hmyk6Arp7M6ngKJb6GQ3G9iCD1cpOWTrlBTKNeAHGhbM49ON7ix8RVG6j3m9IVBB0AB16s7DeJmtLEfJm4qy1xQAR81ttfo77eFCsdCuGDelSVAiUY7mFGqxvUdhNIo3yrBSZZgsx7qwzieBmZ+O1Q9UUZQSM0SSDpJEqsaamV7Na3MV0M8SzqGY5RIYjQFgB1ew9kaUwwJmR6DXUdV9MoVdNNNY8oq0MjAbAkCZBIJGUET1YDceB5TNWLPR5YiVZc2uoPFiPLQnsNbmG6KUqpd1OUm7ChhmBKkgkiYn41K0jgr1rZyalesBkadJy6/6RNSi5HNJgyzqgyzvPBlkEGeOk1efoJwqzq2YqQsyzHVUUEDrb6dprebAB2ZEuKiZRACezBneRpBIp/2c1wupvzCwBlJG69f2h1uqdfPWKtEs5vFdF5VzK2cRIy6HQtmkHURHnVc4QBQS0bkncgkgKsc+M9tdI/R7I2V2QoVCsSGB5AhYIkntqjZ6IYSouIQcqk9YnNmJmI1Oumu4qUW7MdsLCrMas0ENqdhBWDEEHxq9g790LksSrEjrBgAQgYuOtoNXU78q6LEfJ0MxYXGBbKQchlYDCQc2m+3YKrYvoR0Iy5GUK2bMWTcAOQFaBIEnt7NKtE5KH/yPvN9dPxpVsricSoC22tFQoAzOZ2E8Oc0qtEofC9HZ2RPS3evlGlu2Tqd8seyN5natvpL5LGzbz+ndiGMlbSAnMqjrGCAoCATHHXs5a50ldKlc8AmZ1J3BgEkwNNqhaxl1GDBzI5gHfsIrn5oGKlT3NEYEwBmukERAROsNoT931vKt7FfI/IjP6e60KOqLVvMRwHs8J7eNck/SN4qyl9GMnRZmQd4kbbUOzirisGD6jmAezYinmgRKXZptgjlmbk5iS2VesSoWJ9FBMKBt8TW9Z+R6lBcN6+DkzZClsOJElYy7k1xz9JXiGUvoxk9VeYO8SBptQ7GLuIwZXgiYMA7iOIqeePQUZLlmuej9G0u6DLqBAXk3/t9Kv4xUw2Gt3H9LLuwAYLIMEz7K6ELpIBrmnx90qVLmCZOgme+JHdVdwW0Yz8Pyo9aPoRjJPd2bP8A6jsCWVXzKCVEKBOWOZidp/Ct/pDoBLKIUFxs6wdsqiB1Tkts2s6acN64T0I5DwomHBRg6QGBkGBppHEVha69o1JNrZnV4XoxWdUa1cCsApOoKqeJLWlWBJO8/GtHpX5P2bSZ0zu05TBXqjfMQqFiJUDTnXH+tOwYF9HMtoOsZngOdQtBlYMpIIMg8q3549GVGVcm9awC5l/cvqZ3idd5ZAq/zeVaPSvRuBsrK3Mzg5gnpEnraM0BZMBiYFco11zmBdusZbhmMzJjtqFlmRgyuykbEE6SIPkTTzx6CjKuS+cTYCxBjUGGIBzaGDl6ujHWTvW+/R3R7IzJcDvAfJ6ZJLLB5DaPjFcs2IuFSpd8rGSJME8zULbupDK7AjiGM/bU88egoyXs0rjpGqtGaZ68HTaOHjWqmB6PNsN1zcyMcgdj13QhkzKkAHMRPCa5i5ccqVztlmSJME8++g2rjqZV3U8wxqeddBRkvZstZQqzFIBIEsSu0kDK1wE8dRW7gOjcA6BnMXCMzKt1jEaD2SY0C84mNa4l7jlchdsoMxOk84+JpWyy+y7DSNGI05b0/UR6CjJezYZUEt6IrrAPXIGhBCn0wz6EjTvrb6Jw2CZM9yVuAHNke4SFnQkKzZTHCTXFszkBSzEDYZjA7hTIWGzMJ0MEiRyNT9QugotezcxOIA0KPkaQJ9IywDuGa4M3DUgb7cK0+hWwjIxvWmzKd1F0jIACubKxAObN4VyJJMZiWA2kkx3TU7axOUxO8aT30/ULoKLT5ZtY/GIr/wCE+QsckrcKldYYFnmcsdgJ5Vc6Iv4bI7XcO7ZToVDiAd8xLhdT99c2yTE6xtOsd1OqRtIp5/gqjTu2bmLxCK4y2fRo2ihgxGQ7FoLHedtNqt9Gix6K69wJ7OVDDBg+U6MQoUDVY765dknfXvpC3G2lPP8AASallZrPZsIiK5dLmWTGcz1my7KY2WIPM95cclooHsqwAbKzS6yOAOaDsFPezdk4L2QdxQzh42qeZdHtX1clK8V+K2NspZRWS8rK5OYN1mIGXqbAyJzTrPs/CxibOHNoG2hJLAK2xYgmZkDm3L2U+HL+jHKkbY5U866D+rm5ZYrm6rY38LetIzpfUzAAAYSJg6a7xHwmrlv1bJ7AcuCAxyTJyAwS0qJUxPvVyno+ym9GKeZdCX1c5SukvwjRuXFUlSEkabp/dSrP9HSqeX4Ov+Q1P+V/Bo+hFL0QrcwfQZf58fyz99aK/JIfxD9WvK5o8WDOS9AKQsCuwHySX32+qPxoq/JJOLtU8iGDOFewJpLaFdu/yVtT7bfr40y/Ja17z1h6yLgziTaFP6IV3afJmyOBPeT+NWU6Htrsq/VFYev0i+Nnnq2Z2oydHO2yMfga9DXAqNj4CpDCD3qy9d9F8fycLZ6BukiUgTr1lmO4mreN6KtW8oz3HLCQqKCYG5OunHwrsPUxzNZWO6Ol16xXNIRokK+5R/ouAe4g+9Xo+n1blU1zwc9aElG48nOWbeGPtO6f5kBH9JJoZXDzobpHMKuvwmuhxOGxY6oRGBmShGs6aSwI0gfCo28FjApIVAd8sS2u5JkjU9te7CB489Xjf+CnguisNcHVuvPFWUBgOccR3TFaK/JexxuP5fhVH9n4t3XMgSGBDmOrHKCdOzjWtdsXFcorHKRKGBAA3QmNxwncdxrzfUQpZQf5PToScrUl/QJfkxhvffxH9tI/JbC7y/1vyqL2sTwI8vwqlfu4ldyfAfhXl+5+zvUV6Ly/J3CDg31mqS9A4T3D9ZvxrEuYy6fnme4fhVc46777eX4VjHU7Fx6OoXoXBj5g8W/GpfsnCfw08Grk/XLnvt40ji7n8RvGmM+xlHo6tujcNwRB3oTVe50RaOzIvdaX7wa5o4p/ff61DN9/ff6xqqE+xlHo6I9AWjveYdyADyimPyZtfxj9T86503n99vrGkLzD57fWNdIqXtkbj0dAfkyn8b+j86Y/JlP4v9H51hC5Pzj4mnn6R8a1UuyXHo2T8m0/jf0f6qj/AOnU/jD6n+qsYjt86bKP0atS7JcejVufJ5ON4fU/1Vl4zo5E9m5m/lj76iUFNkFVJ+2LXRRZabLV5kBoLWRwpuZK0dlKjZKVW2D0bO/0qcPc+lUxih204xQ7a8VLs9BANc+lSl/peNE9ZXtpetDtpS7AFw/0vE1Ah/peNHfFDtpvWh21mUV2AXX+l40ij/S8aJ6yO2n9aHbWKXZoFlf6XjSCP2+NEOJHbTes99KXZkHkft8fzpejft8aIcQO2l6yORq7dgdUft8akFft8fzqr0hfY2n9DAuZepMHrdx08aspdIUB4LQMxX2SYEleyu2NRUnwL3JZG/R/Oh4lyiM7zlVSzRqYGpgTrU/S9lTGKVQZUkSAQBJIJg6cQJk91b0oqclEN0gYtNP2a1TOGLs6+4wUwdZKI32OPCtO/iQY0I0nXQjiARVDA4ZLCsqBiGcuSTJLEKpMnnln41uWmo3vw6InZVf5PA6/fWfivk83A+ddKcT2edRa6DuvnXJT+Q4pnBYjCMhgxQcprvXt2zvbX9fCqzYe3P8AhrWvKkYwOLyGmyGuybC2v4YqDYC0fmedPNEYM4/Ieyny11L9EWz80j41VudDLwJ8aq1ojBmAUNSANa56FPBhS/Yze8K0tWPZMWZeSkUNaY6HcbMtS/ZNzmKq1Yv2MGZOSmyVpt0Vc5Cgv0fc92tqUeyYspZO2l6OrDYVx800Fgw+b5UslMjkpU8nlSq2DuBY+kKkMN9IVWW+2mo8aKLhryKNnfcJ6r9Kn9W7fKq7uZiRNSDn3hNXAUwzYbt8qiMN2+VBuXCBNVjiT+prEoKwaAw3bUvVh71UTfPL7ag99uH308I3ND1cc6Xq3bWemKblUvWSaLRG5e9XHvU5w451ktio3PnUvW+xj3Ax47VVoM0X1RVcHmImNfaHGi2rCqqqWkqoWTxgRPfWfaxsgqGCtuJZRPmanDmCGXtzSzTOsHTTlXplG9NR9oyk7Zoi2vvVndMWFZ8Mm49PnJImClq4wPiB41oeqqAC1wwewDXlsadbNrgzsRyJ/ACppwcHkg42AR3eYC5s+QyYGWdWEDfLGnPjVrEusqu2X7+Z/W1BBUwozowZSDqfZYHlqDEEciaNkBPskSfpH/xrclcWl7dhRYMhP0adQnPzpsZhSBmWRzBrMa6w4+VcPGy0ak29s3nUcqHj51menb4d1Qe+29PGKZpFE50gic6zVxTfCn9OTWfChRp+jTnTG2nOsxrrdtTV2PAzU8aG5dNtP1NOET9TVOH5URGcbqPGo4pE3LORKWRKgBPzRSVPoimKFsIjINxPjRQycvtqqU7KgUHKtJJDcuHJ7oqLej90VmvaYar4UAu3dWkkwa8WvcHhSrJ61PTEtFmygo+SKBbFFrMeDFianUUFqLbOlRN2asi40NVyKsuarVJECDag3bgA0Ut3D79vOjJtSaquAVs7nZAP8zfcAadrT75lHYB95P3URQToJJ2jferN/BXcj5cocISoY6Fo6o0037a3pxlJ7IjdFD0GvtsZ7gPED76dcGszkDH6ZLeRJqHRrXGtKboAfXNHeYMAkAxEid5q3B50m3F1Zpbjeqn3so5IoH2g04sDiWPex+wGKsJJHGmcd9MmVFvorIpylV12Ma901rlI2rm0PKt7B3wyg8eNdYTvZlLISRtp3UJ8PrI0+A+8UUEdtSiugAg8CB4/lXMXb6O9xUzA22yMCMusGCvNTBg9k7EE9Li1OUhWysdAdzVHBYdyA105nVAhmPa3f4SQB/l7arh9tsl70Yq70dUFTx+FyGeB2/A1XS5FeSVphkmsgUwSjBuyoOpHCo7W6IL0dESRQM8b7UZbnbpR/ciWW7bc6I1qaznxiruwoR6etLpmmspS4aLaLzIQdqIhB4Csl+mQ2iITVdruJb2VCjnTFozkjoJFDu3UHtMKxUwd5vbuR3VbtdCJ85mbvNVV2LZK70paHzp7hVO7j8/sW2PfWrb6PtrsoqwiAbVbQ3OayYnggpV1U0qZfAr5Mm2dKItBDQBUkfsI741rSibURHepodKHM76U40EzUxphxHY1SLirbGsy9dVSZIHeYqONmaouW7lFDVkr0laGmfwUmiHFk+wjnlIyjxJ+6uig6FGhavlTKmDWi2J/dFnUGQcoXdjGkTtrrXN3GuTuqeZH2z5Vb9aZgoZhoI0EadxJrem3CL3/AGI1uHz/AOx4UysBQS/lT5+IrGNmki5acUUtWej9vhRw88dKYUaoITFWcFiMrdh3qojjnSLqNyBFaUaKdTnkaVH0vfWHhOkkK5Q4zDsmfOo38ft1Qf5NPh1jFddwavSCAgNrmGmkajkZ3pYS+cupHw0msO70kxjroADJABk8gdxRrfSJOiKf5l3G+8jjNbv7fkzX3Gzftq6kHaubxdnIY4VezXWMhVHw1oOI6Me4Ou5muUoplZljGquhbzqFzphdgJ8ak3RaKYaSe2nGHQaBaijElMovjLp9lNKSWrze08DsrQyCez41C4BzI/XbUquCYgU6KB9pyaMnRltfmz31FHirGfjPlUlfYxSLOGZV0AAHdWgj6b1z7uQdCakmLYdtc8GMTYdORmorcIqnbxTEb+VSa+f0Kw9PoUX0u0TPWOMUZ/KrNq+T+FK7IX84pVUk8/s/ClVooANNSLwJoITvHbUwvCTVyRMmM2JnYU6XzxAqL2waS2wOdMxciQudlZuKsKx6wnsnStPKKE9gdtTMm5SsIqnRQPhRmjeKMuFWn9XHbTyjcpuwnhS9IBVs20HHxoDvbXjRagtk0dY1BFM7LVZ8YnzQTUM7tsh8a1mxZYzqKi2OUcJ7zA+8+VBHRrtuYoydDqPak/Gr5EvZbfoq3ekWPzgB9Ea+J/CqZMn2WY82JroE6OtrstGFhB80VfOlwKZh4b0i6p1e4Vo2bZOrtNXci8qcLyHn+VRa1sq2IoQu2vwqwuPI2ig+j12HhUgg90VHqjJlgY9tqXrTGglOwU+XsFTyjJg7/W1MUD0HbVkyOVIT2VHMFUJwpwg2g/ASatZDSytTMFMprH2iKddKtwacoeVMgVCQdqA5FXbC3nd19XfIoBFyJVyQJEbiJ31Gh24yZOytTyjyiWZy3Ioq3T21ZgjhTXcBfurFl0ttmEswnTiAOJqQk5yUUg9tysWNJbrcjWxj+jrlrKWysrbMuokbjsPZ9tUpPKsTbi6ktxyA9bb3T4GlVjXlSrOYosjDL2+NP6stBfFqOIqu/SXIT8K3iC8MMtI2UH+9ZT4i82ykCmTB3W3ePhVxRLNJ3ReI8ao4jH2wdBNJeiucnv8A96MMGo+b5VGolplM49j7CGmyXX7BWmiAfNo6RFY2XCFGQnRRPtMasW+i0HCavinAHKlsYorphUGyCiqByFEphQtDQOXlVbCY63cZ0QyUbK4KkQdRpI1Eg6jlWhhXRDmeIHPia17+OW/aYAKWTWeKqASI5iRB5T4eiGhem5N7+jLlvRhQOVNI5UQrUYrzmiJ7qhmE0SmYH4UQJhqdTTJHKiaRwradkGFIzRMwphSgOiFjAEzQ8NgL2Rnco4mQEDAohgANm9qPeHOnfEFNkDCCSZObTgBx258RpT4D5RZs37sukHPqCpgEgSDvMeNeuGlHB5csy272Bq4G9EV6cQ4zZQs6wCSB2AmCRPGnW2BXlcXF0bJBqQcDf/elApu6rwCxg8cQQSSJ2JMCJIgnypsUIPBpEyOIk79oMg1mX8MXYgkqg3g6sYo2CQqmRjOVjHcYI37Z8a9erPKGPtbnNKmTdRQs4BA21kHhoDM/D7KsE0NkWdRO/hxMeFefSX3Jm3wDXp7M4skZlYhdtidAQeYJpiaYgaaDqmRpsRrTuwB8/gRI8jTVlmlL9glWw9Ko5xSrzlM9MIo3AqwhC7KPClmpA1MmWkF9OeQ8KXrB7KExpTTJgIb7VF7zdlRmovUbdEGN89lS9KaHNOKy2zQQ3G51EuedRFQuX1US7Ad5iqgGznnSVztrWe3SKRIBK+8eqvifuBoVvFO4BBKj6CyfrQfsHfW1F+yWjY6QsiQjDYfo9+58Kr9HWyjq3zi0mNATwAXYDhp21E33PzD3kgeOpPlUVD/RX4Fv7a6eR3tx/RK2ovYqVdlBMA6a8DqPKKFnPM+NRN1iAGOYjifaI5E7kDhO1NNcp1k8eColnPOnzHmfGh09SJQgY8/Op5ieJ8arzHGoPhwx1Zo5BoHlVVWRk8R0giaO+vLUnyqr+2k1gn4mPLU+VT/ZVofMnvk/aas28OieyqjtAFdbiZ3Mw371yYXIsaFUlyDEw1yFAPdNHwWFa2pRECg6nM065QuwEbKNjwrQpxWnqWq9FSAYbMqhTrA3Ayz2wNB8KsZqgxjUn41SvdJW1MA5jyXbxOlYlcnY2RoTSU/Gs1cTcb2Egczt4mPIGhYjC3nEHIR9JiR4AAeVFHfdks3MTv8AD7ST9kUC5iURTndV5FiBrwGvaKxx0fiDobwUfR4eQp7XQC5szsztzmPz866txybvkm9UWH6RXZdSdsxyA/E6n4A1PD4m5BzAMT7ilQPi7a/CirhVT2FAPhPfzognjvWMklUTVFO9fbTSJ2yhnPgAAPjNSuYh21CawPaIXYRsJq4BTMk1ly2oFD99/wAv6zH7qVWopVjL4BbFg8hSGGbspUquKBI4RuY8fypeptzFPSpigI4Q8xUXwhjcUqVGkAPqp5ipNhTzpUqxSNFHE9GO3/2kDkBHmDNAT5PJuzM3ef0aVKtptGaLdnopF9lVHbEnxOtWfQdtKlU55CELHbTmxTUqlAJ6t20vVp401KlGhNhxzpLhweNKlVSA5w4503oBzNKlUoyWEwwjc+VJsNA2J7JpUq6xSoAGw1xtJVD8X/tFV26LczmvNH0VC+Y1pqVaikZKPQuGw+JU3Fa44DZesSuo7PiDvxrcw/RlpfYWO3j470qVddWKUnFEjwHbCLUzgR+jSpVyxRoXqI/RpvUl5UqVXBAXqY5HxpjghwHnSpVMUBlwop2wY5edKlRJFI+qD9GlSpUxRD//2Q==`,
      //Project URL - Add Your Project Url Here
      url: "",
    },


    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am currently a Senior at University of Maryland, pursuing my bachelors degree in Computer science. I'm also pursuing my minors in Business from UMD Robert Smith Business School. I have acquired skills in various different programming languages and technologies through my rigorous coursework, past internships and personal projects.",
  aboutParaTwo:
    "I was fascinated by the way internet works and web applications the day we got internet connection at our place. I remember exploring a lot of different websites on internet and trying to break them apart, like I did with various other things (my parents weren't so happy with that, but ok),  to figure out how it worked, failed attempts. Ever since then, I learnt any and all computer technologies I could, and started pursuing Computer Science as a degree here at University of Maryland.",
  aboutParaThree:
    "My journey in Computer Science has been a fulfiiling experience so far, as it involves combination of a lot of things I like: Math, (Software) engineering, building and breaking, logcal thinking (algorithms).....",
  aboutImage:
    myPhoto,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: javaIcon,
      para:
        "Java was the first programming Language I ever learnt. I have 3+ years of experience coding in java. It has been by far my primary language to code in.",
    },
    {
      img: ocamlIcon,
      para:
        "I like functional languages a lot. OCaml is one of my 3 favorite languages because it is super cool, and innovative. I'm also a teaching assistant for a class that Teaches OCaml",
    },
    {
      img: pythonIcon,
      para:
        "Python is very popular because of its high support and tonnes of great third party libraries. It helps me get task done real quick. ",
    },

    {
      img: jsIcon,
      para:
        "Javascript is super essential for web development, and since web development is an essential skill for a software developer, might as well add that to the list. Most of the work that I did in my internship is based on JS programming language.",
    },
    {
      img: reactIcon,
      para:
        "If you would ask me to choose a frontend library, I'd probably choose react.",
    },
    {
      img: rubyIcon,
      para:
        "Ruby is better than Python. Period. Just kidding, but I like ruby because its purely Object Oriented.",
    },
    {
      img: htmlIcon,
      para:
        "I learnt HTML before I learnt react. ;)",
    },
    {
      img: cssIcon,
      para:
        "I learnt CSS before I learnt react. ;)",
    },

    {
      img: matlabIcon,
      para:
        "Matlab, because linear algebra and calculus is pog.",
    },






  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Experience",
  promotionPara:
    "I have been coding since more than 4 years, and have acquired experience in various programming languages and technologies. Through my past internships, volunteer experiences, personal projects and rigorous coursework, I have gained experience in software development, and I'm looking for full time opportunities for new grad software engineer positions starting May 2022.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/tdgandhi" },
    {
      img: linkedinIcon,
      url: "https://www.codepen.com/",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/tejangandhi/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
