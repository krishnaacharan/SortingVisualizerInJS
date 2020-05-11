window.addEventListener("load", () => {
    RandomSourc();
});
//speedValue
var y = 50;
//Some flag kind of variables
var global = 1;
var insorting = 0;
var sorting = 0;
var merging = 0;
//function to generate new random array
var RandomSourc = () => {

        if (sorting == 0 && insorting == 0 && merging == 0) {
            var bars = document.querySelector(".bars");
            bars.innerHTML = "";
            //array size slider
            var slider = document.getElementById("myRange");
            var output = document.getElementById("demo");
            //sorting speed slider
            var speedSlider = document.getElementById("myRange1");
            var output1 = document.getElementById("demo1");
            output1.innerHTML = speedSlider.value;
            //onchannge for speed control
            speedSlider.onchange = () => {
                y = 0;
                y = speedSlider.value;
                output1.innerHTML = speedSlider.value;
            }
            output.innerHTML = slider.value;
            arr = [];
            //onchange for array size
            slider.oninput = function() {
                if (sorting == 0 && insorting == 0 && merging == 0) {
                    let progress = document.querySelector(".progress-bar");
                    progress.style.width = 0 + "%";
                    global = 0;
                    sorting = 0;
                    insorting = 0;
                    merging = 0;
                    output.innerHTML = this.value;
                    arr.length = this.value;
                    bars.innerHTML = "";
                    let i = 0;
                    for (i = 0; i < arr.length; i++) {
                        arr[i] = (Math.random() * 98);
                    }
                    createbars(bars, arr, arr.length);
                }
            }

            let i = 0;
            for (i = 0; i < slider.value; i++) {
                arr[i] = (Math.random() * 100);
            }
            createbars(bars, arr, slider.value);
        }
    }
    //Create bars for the array generated
const createbars = (bars, arr, val) => {
    for (i = 0; i < val; i++) {
        var bar = document.createElement("div");
        bars.appendChild(bar);
        let progress = document.querySelector(".progress-bar");
        progress.style.width = 0 + "%";
        bar.id = i;
        bar.className = "bar";
        bar.style.width = arr[i] + "%";
        bar.style.backgroundImage = "linear-gradient(to right,skyblue, violet)";
        bar.style.height = (500 / val) + "px";
        bar.style.borderRadius = "10px";
        bar.style.border = "1px black solid";
    }
    global = 1;
}

//Bubble Sort 
let bubblesort = async(x) => {

    if (global == 1 && sorting == 0 && insorting == 0 && merging == 0) {
        var slider = document.getElementById("myRange");
        let swapp = false;
        let n = slider.value - 1;
        sorting = 1;
        global = 0;
        let i = 0;
        if (sorting == 1 && insorting == 0 && merging == 0) {
            do {
                swapp = false;
                sorting == 1;
                for (i = 0; i < n; i++) {
                    let progress = document.querySelector(".progress-bar");
                    progress.style.width = (i / (n - 1)) * 100 + "%";
                    let change1 = document.getElementById(i);
                    let change2 = document.getElementById(i + 1);
                    change1.style.backgroundImage = "linear-gradient(to right,green,blue )";
                    change2.style.backgroundImage = "linear-gradient(to right,green,blue )";
                    await sleep(500 - (y * 5));

                    if (x[i] > x[i + 1]) {
                        swapfun(x, i);
                        await sleep(500 - (y * 5));
                        swapp = true;
                    }
                    change1.style.backgroundImage = "linear-gradient(to right,skyblue, violet)";
                    change2.style.backgroundImage = "linear-gradient(to right,skyblue, violet)";
                }

                n--;
            } while (swapp && sorting == 1);

        }
    }
    global = 1;
    sorting = 0;
};

//Swapping function in bubble sort
const swapfun = async(x, i) => {

    const temp1 = x[i];
    x[i] = x[i + 1];
    x[i + 1] = temp1;
    let change1 = document.getElementById(i);
    let change2 = document.getElementById(i + 1);
    let temp = change1.style.width;
    change1.style.width = change2.style.width;
    change2.style.width = temp;
};


//Insertion sort 
const insertion = async(nums) => {

    if (insorting == 0 && sorting == 0 && global == 1 && merging == 0) {
        insorting = 1;
        if (insorting == 1 && sorting == 0 && merging == 0) {
            for (let i = 1; i < nums.length; i++) {
                let j = i - 1;
                let temp = nums[i];
                let tempwidth = document.getElementById(i).style.width;
                while (j >= 0 && nums[j] > temp) {
                    await sleep(500 - (y * 5));
                    let j0 = document.getElementById(j);
                    let j1 = document.getElementById(j + 1);
                    j0.style.backgroundImage = "linear-gradient(to right,green,blue )";
                    j1.style.backgroundImage = "linear-gradient(to right,green,blue )";
                    await sleep(500 - (y * 5));
                    nums[j + 1] = nums[j];
                    j1.style.width = j0.style.width;
                    await sleep(500 - (y * 5));
                    j0.style.backgroundImage = "linear-gradient(to right,skyblue, violet)";
                    j1.style.backgroundImage = "linear-gradient(to right,skyblue, violet)";
                    j--;

                }
                let z = document.getElementById(j + 1);
                z.style.width = tempwidth;
                await sleep(500 - (y * 5));
                nums[j + 1] = temp;
            }
        }
    }
    insorting = 0;
}

//MergeSort
var merge = async(arr) => {
        if (insorting == 0 && sorting == 0 && global == 1 && merging == 0) {
            merging = 1;
            if (insorting == 0 && sorting == 0 && merging == 1) {
                const anim = getanim(arr);

                for (let i = 0; i < anim.length; i++) {
                    const isColorChange = i % 3 !== 2;
                    if (isColorChange) {
                        const bar1 = anim[i][0];
                        const bar2 = anim[i][1];

                        const bar1Style = document.getElementById(bar1).style;
                        const bar2Style = document.getElementById(bar2).style;
                        const color = i % 3 === 0 ? "linear-gradient(to right,green,blue )" : "linear-gradient(to right,skyblue, violet)";
                        await sleep(500 - (y * 5));
                        bar1Style.backgroundImage = color;
                        bar2Style.backgroundImage = color;
                        await sleep(500 - (y * 5));
                    } else {

                        const [bar1Idx, newHeight] = anim[i];
                        const bar1Style = document.getElementById(bar1Idx).style;
                        bar1Style.width = newHeight + "%";

                    }
                }

            }
            merging = 0;
        }
    }
    //MergeSort anim

function getanim(array) {
    const anim = [];
    if (array.length <= 1) return array;
    const auxArray = array.slice();
    mergeSort(array, 0, array.length - 1, auxArray, anim);
    return anim;
}

function mergeSort(mainArray, startIdx, endIdx, auxArray, anim) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSort(auxArray, startIdx, middleIdx, mainArray, anim);
    mergeSort(auxArray, middleIdx + 1, endIdx, mainArray, anim);
    Merge(mainArray, startIdx, middleIdx, endIdx, auxArray, anim);
}

function Merge(mainArray, startIdx, middleIdx, endIdx, auxArray, anim) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        anim.push([i, j]);
        anim.push([i, j]);
        if (auxArray[i] <= auxArray[j]) {
            anim.push([k, auxArray[i]]);
            mainArray[k++] = auxArray[i++];
        } else {
            anim.push([k, auxArray[j]]);
            mainArray[k++] = auxArray[j++];
        }
    }
    while (i <= middleIdx) {

        anim.push([i, i]);
        anim.push([i, i]);
        anim.push([k, auxArray[i]]);
        mainArray[k++] = auxArray[i++];
    }
    while (j <= endIdx) {
        anim.push([j, j]);
        anim.push([j, j]);
        anim.push([k, auxArray[j]]);
        mainArray[k++] = auxArray[j++];
    }
}

//this function is adding delay
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}