var masonry_column_list = document.querySelectorAll('.masonry-col');
var masonry_column_array = [...masonry_column_list];

let i = 1
let j = 1
let k = 1
let height_min = 0;
let height = 0;
let height_object = {};



const caculateColumnHieght = () => {
    for (var l = 1; l <= masonry_column_array.length; l++) {
        var col_check = document.querySelectorAll(`.masonry-item-${l}`);
        $(`.masonry-item-${l}`).find('img').on('load', function () {
            col_check.forEach(item => {
                height += item.clientHeight;
            });
            console.log('height : ', height);
            height_object['col_' + l] = height;
            height = 0
        });

    }

    console.log('height_object : ', height_object);

    height_min = height_object['col_' + 1]
    k = 1
    for (var l = 2; l <= masonry_column_array.length; l++) {
        if (height_object['col_' + l] < height_min) {
            height_min = height_object['col_' + l]
            k = l
        }
    }

    console.log('k :', k);
    console.log('----------------------------------------');
}

const masonryRender = () => {

    while (i <= masonry_column_array.length) {
        while (j <= masonry.length) {

            caculateColumnHieght()

            let masonry_item = `
                                    <div class="masonry-item masonry-item-${i} relative flex-middle hover">
                                        <a href="#" >
                                            <img src="${masonry[j].img}" class="br-16">
                                        </a>
                                        <div class="absolute z-10 text-white fs-20 fw-700 z-10">
                                            ${j}
                                        </div>
                                    </div>
                                 `
            $(`.masonry-col-${i}`).append(masonry_item)
            if (j == masonry.length) {
                return
            }
            i = i + 1;
            j = j + 1;
            break
        }

        if (i == (masonry_column_array.length + 1)) {
            i = 1
        }

    }
}
masonryRender()

