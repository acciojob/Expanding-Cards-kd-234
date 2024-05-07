//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {

const panels = document.querySelectorAll('.panel');
	
	panels.forEach(panel => {
		panel.addEventListener('click', function() {
	// Remove 'active' class from all panels
			panels.forEach(p => {
				p.classList.remove('active');
			});
			// Add 'active' class to the clicked panel
			this.classList.add('active');
		});
	});
});

// document.addEventListener('DOMContentLoaded', function() {
 //        const panels = document.querySelectorAll('.panel');
        
 //        panels.forEach(panel => {
 //            panel.addEventListener('click', function() {
 //                // Remove 'active' class from all panels
 //                panels.forEach(p => {
 //                    p.classList.remove('active');
 //                });
                
 //                // Add 'active' class to the clicked panel
 //                this.classList.add('active');
 //            });
 //        });
 //    });