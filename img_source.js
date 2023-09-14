var slides = [
    { id: 1, img: './img/b1.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 2, img: './img/b2.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 3, img: './img/b3.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
]

var collections = [
    { id: 1, img: './img/b4.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 2, img: './img/b5.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 3, img: './img/b6.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 4, img: './img/b7.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 5, img: './img/b8.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 6, img: './img/b9.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
]

var videos = [
    { id: 4, img: './img/b4.jpg', src: 'https://www.youtube.com/embed/a3Vq36uyg3U' },
    { id: 5, img: './img/b5.jpg', src: 'https://www.youtube.com/embed/1CwXajsTqNA' },
    { id: 6, img: './img/b6.jpg', src: 'https://www.youtube.com/embed/ej4LTWFyEjk' },
    { id: 7, img: './img/b7.jpg', src: 'https://www.youtube.com/embed/DYQ-hGTGPYk' },
    { id: 8, img: './img/b8.jpg', src: 'https://www.youtube.com/embed/mAPhE_iQfOs' },
    { id: 9, img: './img/b9.jpg', src: 'https://www.youtube.com/embed/lT3nbxk_D3k' },
    { id: 4, img: './img/b4.jpg', src: 'https://www.youtube.com/embed/7thXUlATrNQ' },
    { id: 5, img: './img/b5.jpg', src: 'https://www.youtube.com/embed/TPsCNl9P3iQ' },
    { id: 6, img: './img/b6.jpg', src: 'https://www.youtube.com/embed/SSeG6aUuMpU' },
    { id: 7, img: './img/b7.jpg', src: 'https://www.youtube.com/embed/94orjyRsL1Y' },
    { id: 8, img: './img/b8.jpg', src: 'https://www.youtube.com/embed/IKyFoME00hM' },
    { id: 9, img: './img/b9.jpg', src: 'https://www.youtube.com/embed/qS5uFLjpMi4' },
]

var chtks = [
    {
        id: 1, img: './img/chtk1.jpg',
        tittle: 'Tổng hợp Các biện pháp thi công hầm nhà phố hiệu quả, đúng kỹ thuật',
        des: 'Thi công hầm nhà phố là giải pháp được nhiều gia chủ lựa chọn để tăng thêm công năng sử dụng mà vẫn tối ưu diện tích, không gian. Tuy nhiên, việc thi công tầng hầm khá phức tạp và hàm chứa nhiều rủi ro trong quá trình xây dựng, đòi hỏi người đơn vị tổng thầu phải xác định biện pháp đúng đắn và tay nghề đội ngũ thi công cũng cần được đảm bảo. Trong bài viết này, Decox sẽ tổng hợp cũng như phân tích ưu, nhược điểm của các biện pháp thi công hầm nhà phố được sử dụng phố biến trên thị trường hiện nay, mời bạn cùng theo dõi.'
    },
    {
        id: 2, img: './img/chtk2.jpg',
        tittle: 'Tổng hợp Các biện pháp thi công hầm nhà phố hiệu quả, đúng kỹ thuật',
        des: 'Thi công hầm nhà phố là giải pháp được nhiều gia chủ lựa chọn để tăng thêm công năng sử dụng mà vẫn tối ưu diện tích, không gian. Tuy nhiên, việc thi công tầng hầm khá phức tạp và hàm chứa nhiều rủi ro trong quá trình xây dựng, đòi hỏi người đơn vị tổng thầu phải xác định biện pháp đúng đắn và tay nghề đội ngũ thi công cũng cần được đảm bảo. Trong bài viết này, Decox sẽ tổng hợp cũng như phân tích ưu, nhược điểm của các biện pháp thi công hầm nhà phố được sử dụng phố biến trên thị trường hiện nay, mời bạn cùng theo dõi.'
    },
    {
        id: 3, img: './img/chtk3.jpg',
        tittle: 'Tổng hợp Các biện pháp thi công hầm nhà phố hiệu quả, đúng kỹ thuật',
        des: 'Thi công hầm nhà phố là giải pháp được nhiều gia chủ lựa chọn để tăng thêm công năng sử dụng mà vẫn tối ưu diện tích, không gian. Tuy nhiên, việc thi công tầng hầm khá phức tạp và hàm chứa nhiều rủi ro trong quá trình xây dựng, đòi hỏi người đơn vị tổng thầu phải xác định biện pháp đúng đắn và tay nghề đội ngũ thi công cũng cần được đảm bảo. Trong bài viết này, Decox sẽ tổng hợp cũng như phân tích ưu, nhược điểm của các biện pháp thi công hầm nhà phố được sử dụng phố biến trên thị trường hiện nay, mời bạn cùng theo dõi.'
    },
    {
        id: 4, img: './img/chtk4.jpg',
        tittle: 'Tổng hợp Các biện pháp thi công hầm nhà phố hiệu quả, đúng kỹ thuật',
        des: 'Thi công hầm nhà phố là giải pháp được nhiều gia chủ lựa chọn để tăng thêm công năng sử dụng mà vẫn tối ưu diện tích, không gian. Tuy nhiên, việc thi công tầng hầm khá phức tạp và hàm chứa nhiều rủi ro trong quá trình xây dựng, đòi hỏi người đơn vị tổng thầu phải xác định biện pháp đúng đắn và tay nghề đội ngũ thi công cũng cần được đảm bảo. Trong bài viết này, Decox sẽ tổng hợp cũng như phân tích ưu, nhược điểm của các biện pháp thi công hầm nhà phố được sử dụng phố biến trên thị trường hiện nay, mời bạn cùng theo dõi.'
    },
    {
        id: 5, img: './img/chtk5.jpg',
        tittle: 'Tổng hợp Các biện pháp thi công hầm nhà phố hiệu quả, đúng kỹ thuật',
        des: 'Thi công hầm nhà phố là giải pháp được nhiều gia chủ lựa chọn để tăng thêm công năng sử dụng mà vẫn tối ưu diện tích, không gian. Tuy nhiên, việc thi công tầng hầm khá phức tạp và hàm chứa nhiều rủi ro trong quá trình xây dựng, đòi hỏi người đơn vị tổng thầu phải xác định biện pháp đúng đắn và tay nghề đội ngũ thi công cũng cần được đảm bảo. Trong bài viết này, Decox sẽ tổng hợp cũng như phân tích ưu, nhược điểm của các biện pháp thi công hầm nhà phố được sử dụng phố biến trên thị trường hiện nay, mời bạn cùng theo dõi.'
    },
    {
        id: 6, img: './img/chtk6.jpg',
        tittle: 'Tổng hợp Các biện pháp thi công hầm nhà phố hiệu quả, đúng kỹ thuật',
        des: 'Thi công hầm nhà phố là giải pháp được nhiều gia chủ lựa chọn để tăng thêm công năng sử dụng mà vẫn tối ưu diện tích, không gian. Tuy nhiên, việc thi công tầng hầm khá phức tạp và hàm chứa nhiều rủi ro trong quá trình xây dựng, đòi hỏi người đơn vị tổng thầu phải xác định biện pháp đúng đắn và tay nghề đội ngũ thi công cũng cần được đảm bảo. Trong bài viết này, Decox sẽ tổng hợp cũng như phân tích ưu, nhược điểm của các biện pháp thi công hầm nhà phố được sử dụng phố biến trên thị trường hiện nay, mời bạn cùng theo dõi.'
    },
    {
        id: 7, img: './img/chtk7.jpg',
        tittle: 'Tổng hợp Các biện pháp thi công hầm nhà phố hiệu quả, đúng kỹ thuật',
        des: 'Thi công hầm nhà phố là giải pháp được nhiều gia chủ lựa chọn để tăng thêm công năng sử dụng mà vẫn tối ưu diện tích, không gian. Tuy nhiên, việc thi công tầng hầm khá phức tạp và hàm chứa nhiều rủi ro trong quá trình xây dựng, đòi hỏi người đơn vị tổng thầu phải xác định biện pháp đúng đắn và tay nghề đội ngũ thi công cũng cần được đảm bảo. Trong bài viết này, Decox sẽ tổng hợp cũng như phân tích ưu, nhược điểm của các biện pháp thi công hầm nhà phố được sử dụng phố biến trên thị trường hiện nay, mời bạn cùng theo dõi.'
    },
    {
        id: 8, img: './img/chtk8.jpg',
        tittle: 'Tổng hợp Các biện pháp thi công hầm nhà phố hiệu quả, đúng kỹ thuật',
        des: 'Thi công hầm nhà phố là giải pháp được nhiều gia chủ lựa chọn để tăng thêm công năng sử dụng mà vẫn tối ưu diện tích, không gian. Tuy nhiên, việc thi công tầng hầm khá phức tạp và hàm chứa nhiều rủi ro trong quá trình xây dựng, đòi hỏi người đơn vị tổng thầu phải xác định biện pháp đúng đắn và tay nghề đội ngũ thi công cũng cần được đảm bảo. Trong bài viết này, Decox sẽ tổng hợp cũng như phân tích ưu, nhược điểm của các biện pháp thi công hầm nhà phố được sử dụng phố biến trên thị trường hiện nay, mời bạn cùng theo dõi.'
    },
]

var all = [
    { id: 1, img: './img/b4.jpg', tittle: 'nhà phố bình thạnh', des: 'thiết kế nội thất' },
    { id: 2, img: './img/b5.jpg', tittle: 'Biệt Thự thủ đức 80m2', des: 'công trình thực tế' },
    { id: 3, img: './img/b6.jpg', tittle: 'Thi công nội thất Empire City - Cove Residences 230m2', des: 'thiết kế nội thất' },
    { id: 4, img: './img/b7.jpg', tittle: 'the white townhouse', des: 'công trình thực tế' },
    { id: 5, img: './img/b8.jpg', tittle: 'bq house', des: 'thiết kế nội thất' },
    { id: 6, img: './img/b9.jpg', tittle: 'the sonata house', des: 'công trình thực tế' },
    { id: 7, img: './img/b10.jpg', tittle: 'Thi công nội thất Empire City - Cove Residences 230m2', des: 'Biệt Thự' },
    { id: 8, img: './img/b4.jpg', tittle: 'the nest villa interio', des: 'Biệt Thự' },
    { id: 9, img: './img/b5.jpg', tittle: 'The Mango Glamping - Dự án nghỉ dưỡng thiên nhiên tại hồ Trị An', des: 'Biệt Thự' },
    { id: 10, img: './img/b6.jpg', tittle: 'h house', des: 'Biệt Thự' },
    { id: 11, img: './img/b7.jpg', tittle: 'Thi công nội thất Empire City - Cove Residences 230m2', des: 'Biệt Thự' },
    { id: 12, img: './img/b8.jpg', tittle: 'lux Villa', des: 'Biệt Thự' },
    { id: 13, img: './img/b9.jpg', tittle: 'bq house', des: 'Biệt Thự' },
    { id: 14, img: './img/b10.jpg', tittle: 'Biệt Thự thủ đức 80m2', des: 'công trình thực tế' },
    { id: 15, img: './img/b4.jpg', tittle: 'lux Villa', des: 'công trình thực tế' },
    { id: 16, img: './img/b5.jpg', tittle: 'bq house', des: 'công trình thực tế' },
    { id: 17, img: './img/b6.jpg', tittle: 'Biệt Thự thủ đức 80m2', des: 'công trình thực tế' },
    { id: 18, img: './img/b7.jpg', tittle: 'Thi công nội thất Empire City - Cove Residences 230m2', des: 'công trình thực tế' },
    { id: 19, img: './img/b8.jpg', tittle: 'bq house', des: 'công trình thực tế' },
    { id: 20, img: './img/b9.jpg', tittle: 'lux Villa', des: 'công trình thực tế' },
    { id: 21, img: './img/b10.jpg', tittle: 'bq house', des: 'thiết kế nội thất' },
    { id: 22, img: './img/b4.jpg', tittle: 'the sonata house', des: 'thiết kế nội thất' },
    { id: 23, img: './img/b5.jpg', tittle: 'Thi công nội thất Empire City - Cove Residences 230m2', des: 'Biệt Thự' },
    { id: 24, img: './img/b6.jpg', tittle: 'the nest villa interio', des: 'Biệt Thự' },
]

var masonry = [
    { id: 1, img: './img/1.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 2, img: './img/2.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 3, img: './img/3.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 4, img: './img/4.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 5, img: './img/5.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 6, img: './img/6.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 7, img: './img/7.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 8, img: './img/8.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 9, img: './img/9.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 10, img: './img/10.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 11, img: './img/11.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 12, img: './img/12.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 13, img: './img/13.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 14, img: './img/14.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 15, img: './img/15.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 16, img: './img/16.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 17, img: './img/17.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 18, img: './img/18.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 19, img: './img/19.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 20, img: './img/20.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 21, img: './img/21.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 22, img: './img/22.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 23, img: './img/23.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 24, img: './img/24.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 25, img: './img/25.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 26, img: './img/26.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 27, img: './img/27.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 28, img: './img/28.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 29, img: './img/29.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 30, img: './img/30.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 31, img: './img/31.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 32, img: './img/32.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 33, img: './img/33.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 34, img: './img/34.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 35, img: './img/35.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 36, img: './img/36.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 37, img: './img/37.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 38, img: './img/38.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 39, img: './img/39.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 40, img: './img/40.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 41, img: './img/41.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 42, img: './img/42.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 43, img: './img/43.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 44, img: './img/44.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 45, img: './img/45.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 46, img: './img/46.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 47, img: './img/47.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 48, img: './img/48.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 49, img: './img/49.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
    { id: 50, img: './img/50.jpg', tittle: 'The Adam Villa', des: 'Nhà phố' },
]



