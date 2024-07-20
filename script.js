document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize modal
    const elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);

    // Open modal
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = M.Modal.getInstance(document.getElementById('referModal'));

    openModalBtn.addEventListener('click', function() {
        modal.open();
    });

    // Form validation
    const form = document.getElementById('referForm');
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            M.toast({html: 'Please fill out all required fields.'});
        }
        else{
            const payload = {
                ReferralName: "Subhi",
                ReferralEmail: "subhivarshney012@gmail.com",
                RefereeName: "Vaibhav",
                RefereeEmail: "vaib1343@gmail.com",
              };
              
              // Define the fetch options
              const options = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
              };
              
              // Make the fetch request
              fetch('http://localhost:3000/referrals', options)
                .then(response => response.json())
                .then(data => {
                  console.log('Success:', data);
                })
                .catch(error => {
                  console.error('Error:', error);
                });
        }
    });
});
