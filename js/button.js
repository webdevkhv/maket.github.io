    function ChangeClassInElement(old_class, new_class)
    {
        var showed_certs = document.getElementsByClassName(old_class);
        var total_certs = showed_certs.length;
        if(total_certs > 0)
        {
            for(var i = 0; i < total_certs; i++)
            {
                $(showed_certs[i]).removeClass(old_class).addClass(new_class);
            }  
        }
    }

    $('a#tes').click(function (e) {
    	e.preventDefault();
    	$('.span_icon').toggleClass('act');
    });

    $(document).ready(function() { 
    	$(".vis-invis").toggle(function() {
    		$(".invis-box2").fadeIn(); 
    		$(this).toggleClass("active");
    		var hBlock = $(this).siblings('.invis-box2');
    		$(this).text(hBlock.is(':visible')?'Cмотреть все документы':'Скрыть'); 
    		return false; 
    	},
    	function() { 
    		$(".invis-box2" ).fadeOut(); 
    		var hBlock = $(this).siblings('.invis-box2');
    		$(this).text(hBlock.is(':visible') ? 'Скрыть' : 'Cмотреть все документы');
    		hBlock.toggle('slow');
    		return false; 
    	}
    	);     
    }); 

    $(document).ready(function() { 
        $(".tpo").toggle(function() {
            $(".invis-box-history").fadeIn(); 
            $(this).toggleClass("active");
            var hBlock = $(this).siblings('.invis-box-history');
            return false; 
        },
        function() { 
            $(".invis-box-history" ).fadeOut(); 
            var hBlock = $(this).siblings('.invis-box-history');
            hBlock.toggle('slow');
            return false; 
        }
        );     
    });

    
/*некоторые классы могут использоваться на разных страницах,
измененя могут затронуть работу в нескольих блоках*/
$(document).ready(function() { 
    $(".bpp-book").toggle(function() {
        $(".bpp-book-none").fadeIn(); 
        $(".bpp-book" ).fadeOut(); 
        return false; 
    },
    function() { 
        return false; 
    }
    );     
}); 


function selectOne() {
    $(".buh-button-box").fadeIn(); 
    $(".buh-date").fadeOut(); 
    $(".brpr-clouse").fadeOut();
    $(".brpr").fadeIn();
    $(".dogovor-buh").fadeOut();
}

function selectTwo(){
    $(".buh-button-box").fadeIn(); 
    $(".buh-date").fadeIn();
    $(".brpr-clouse").fadeOut();
    $(".brpr").fadeIn();
    $(".dogovor-buh").fadeOut();
}

    $(document).ready(function() { 
        $(".brpr").toggle(function() {
            $(".dogovor-buh").fadeIn(); 
            $(this).toggleClass("active");
            var hBlock = $(this).siblings('.dogovor-buh');
            $(this).text(hBlock.is(':visible')?'Показать':'Закрыть'); 
            return false; 
        },
        function() { 
            $(".dogovor-buh" ).fadeOut(); 
            var hBlock = $(this).siblings('.dogovor-buh');
            $(this).text(hBlock.is(':visible') ? 'Закрыть' : 'Показать');
            hBlock.toggle('slow');
            return false; 
        }
        );     
    }); 
/*Просмотр - Договор
$(document).ready(function() { 
    $(".brpr").toggle(function() {
        $(".dogovor-buh").fadeIn(); 
        $(".brpr" ).fadeOut(); 
        $(".brpr-clouse" ).fadeIn(); 
        return false; 
    },
    function() { 
        return false; 
    }
    );     
});*/

$(document).ready(function() { 
    $(".vis-invis-packet").toggle(function() {
        $(".invis-box2-packet").fadeIn(); 
        $(this).toggleClass("active");
        var hBlock = $(this).siblings('.invis-box2-packet');
        ChangeClassInElement("title-packet-head", "title-packet-head-opened");
        return false; 
    },
    function() { 
        $(".invis-box2-packet" ).fadeOut(); 
        var hBlock = $(this).siblings('.invis-box2-packet');
        hBlock.toggle('slow');
        ChangeClassInElement("title-packet-head-opened", "title-packet-head");
        return false; 
    }
    );     
}); 

function regOrg(ogrn, kpp, name, locality)
{
    var ch = document.getElementById("OrganizationInfo_CheckRegisterConnetion");
    var OrganizationInfo_AddFiles = document.getElementById("OrganizationInfo_AddFiles");
    
    if (ch.checked == true)
    {
        var showed_org = document.getElementById("OrganizationInfo"); 
        $(showed_org).removeClass("right-table-head").addClass("right-table-head-check"); 
        $(showed_org).find('input').attr('disabled', false);
        $(showed_org).find('input').val('');
        
        OrganizationInfo_AddFiles.style.display = 'block';
    }
    else
    {
        var showed_org = document.getElementById("OrganizationInfo"); 
        $(showed_org).removeClass("right-table-head-check").addClass("right-table-head");
        $(showed_org).find('input').attr('disabled', true);
        $(showed_org).find('input[name="OrganizationInfo_KPP"]').attr('disabled', false);
        
        $(showed_org).find('input[name="OrganizationInfo_OGRN"]').val(ogrn);
        $(showed_org).find('input[name="OrganizationInfo_KPP"]').val(kpp);
        $(showed_org).find('input[name="OrganizationInfo_Name"]').val(name);
        $(showed_org).find('input[name="OrganizationInfo_Locality"]').val(locality);
        
        OrganizationInfo_AddFiles.style.display = 'none';
    }
}