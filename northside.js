document.addEventListener('DOMContentLoaded', () => {
    const bacBoButton = document.getElementById('bac-bo-button');
    const bacBoContent = document.getElementById('bac-bo-content');

    bacBoButton.addEventListener('click', () => {
        if (bacBoContent.innerHTML === '') {
            bacBoContent.innerHTML = `
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bắc Bộ nằm ở vùng cực 
                    Bắc lãnh thổ Việt Nam, có phía bắc giáp Trung Quốc, 
                    phía tây giáp Lào và phía đông giáp biển Đông. Theo cách phân chia hiện 
                    nay thì vùng Bắc Bộ Việt Nam, bao gồm các tỉnh và thành phố nằm ở phía 
                    bắc tỉnh Thanh Hóa, gồm có 3 tiểu vùng:
                </p>
                <ul>
                    <li>
                        Vùng Đồng bằng sông Hồng gồm 10 tỉnh và thành phố: Thái Bình, 
                        Nam Định, Ninh Bình, Hà Nam, Hà Nội, Vĩnh Phúc, Bắc Ninh, Hưng
                        Yên, Hải Dương, Hải Phòng
                    </li>
                    <li>
                        Vùng Tây Bắc gồm 6 tỉnh: Lào Cai, Lai Châu, Điện Biên, Sơn La, 
                        Hòa Bình, Yên Bái
                    </li>
                    <li>
                        Vùng Đông Bắc gồm 9 tỉnh: Hà Giang, Cao Bằng, Bắc Kạn, Lạng Sơn, 
                        Tuyên Quang, Thái Nguyên, Phú Thọ, Bắc Giang, Quảng Ninh.
                    </li>
                </ul>
            `;
        } else {
            bacBoContent.innerHTML = '';
        }
    });

    const trungBoButton = document.getElementById('trung-bo-button');
    const trungBoContent = document.getElementById('trung-bo-content');

    trungBoButton.addEventListener('click', () => {
        if (trungBoContent.innerHTML === '') {
            trungBoContent.innerHTML = `
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Miền Trung Việt Nam còn 
                    gọi là Trung Bộ, nằm ở phần giữa lãnh thổ của Việt Nam, có phía Bắc giáp
                    khu vực đồng bằng Sông Hồng và Trung du miền núi vùng Bắc Bộ; phía Nam
                    giáp các tỉnh Bình Phước, Đồng Nai và Bà Rịa-Vũng Tàu vùng Nam Bộ; phía
                    Đông giáp Biển Đông; phía Tây giáp 2 nước Lào và Campuchia. Địa hình miền
                     Trung gồm 3 khu vực cơ bản là:
                </p>
                <ul>
                    <li>
                        Bắc Trung Bộ Việt Nam gồm có 6 tỉnh: Thanh Hoá, Nghệ An, Hà Tĩnh,
                        Quảng Bình, Quảng Trị và Thừa Thiên-Huế.
                    </li>
                    <li>
                        Nam Trung Bộ Việt Nam gồm 8 tỉnh thành theo thứ tự bắc-nam: Đà Nẵng,
                        Quảng Nam, Quảng Ngãi, Bình Định, Phú Yên, Khánh Hoà, Ninh Thuận và 
                        Bình Thuận.
                    </li>
                    <li>
                        Tây Nguyên gồm 5 tỉnh: Kon Tum, Gia Lai, Đắk Lắk, Đắc Nông và Lâm Đồng.
                    </li>
                </ul>
            `;
        } else {
            trungBoContent.innerHTML = '';
        }
    });

    const namBoButton = document.getElementById('nam-bo-button');
    const namBoContent = document.getElementById('nam-bo-content');

    namBoButton.addEventListener('click', () => {
        if (namBoContent.innerHTML === '') {
            namBoContent.innerHTML = `
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vùng Nam Bộ khá bằng phẳng, 
                    phía tây giáp Vịnh Thái Lan, phía đông và Đông Nam giáp biển Đông, phía bắc
                    và Tây Bắc giáp Campuchia và phía đông bắc giáp với Duyên Hải Nam Trung Bộ và Tây Nguyên.
                    Nam Bộ có 19 tỉnh và thành phố được chia làm 2 tiểu vùng:
                </p>
                <ul>
                    <li>
                        Đông Nam Bộ (còn gọi là Miền Đông) gồm có 1 thành phố trực thuộc trung ương là 
                        Thành phố Hồ Chí Minh và 5 tỉnh: Bà Rịa – Vũng Tàu, Bình Dương, Bình Phước, Đồng Nai và Tây Ninh.
                    </li>
                    <li>
                        Đồng bằng sông Cửu Long (còn gọi là Tây Nam Bộ hay Miền Tây) gồm có 1 thành phố trực thuộc Trung ương
                        là Thành phố Cần Thơ và 12 tỉnh: Long An, Đồng Tháp, An Giang, Tiền Giang, Bến Tre, Vĩnh Long, 
                        Trà Vinh, Hậu Giang, Kiên Giang, Sóc Trăng, Bạc Liêu và Cà Mau.
                    </li>
                </ul>
            `;
        } else {
            namBoContent.innerHTML = '';
        }
    });
});
