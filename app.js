document.addEventListener('DOMContentLoaded', ()=>{
    const faqContainer = document.querySelector('.faq-accordion');

    faqContainer.addEventListener('click', (e)=>{
        /* tıklanan elementin en yakın .faq-dropdown-header sınıfına sahip element olup olmadığı kontrol edilir. */
        const groupHeader = e.target.closest('.faq-dropdown-header');
        /*Eğer tıklanan element böyle bir header'a sahip değilse, kod return ile durur. */
        if(!groupHeader) return;

        /*Başlığın ebeveyn grubu (FAQ sorusu ve cevabı) alınır.*/
        const group = groupHeader.parentElement;
        /* cevap kısmı (groupbody) seçilir. */
        const groupbody = group.querySelector('.faq-dropdown-body');
        const icon = groupHeader.querySelector('.faq-icon');

        icon.classList.toggle('open');
        groupbody.classList.toggle('open');

        const otherGroups = faqContainer.querySelectorAll('.faq-dropdown');

        otherGroups.forEach((otherGroup)=>{
            if(otherGroup!== group){
                const otherGroupBody = otherGroup.querySelector('.faq-dropdown-body');
                const otherIcon = otherGroup.querySelector('.faq-icon');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('open');
            }
        });
    });
});