
        function toggleFAQ(element) {
            let answer = element.nextElementSibling;
            answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        }

    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });

    $(document).ready(function(){
        $("button").click(function(){
          $("p").toggle();
        });
      });
