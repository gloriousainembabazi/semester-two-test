

//SECTION D

//QN 1
// Bucket List - Add an Item (Create)

let bucketList = [];

// Function to add an item to the bucket list
function addItem(item) {
    if (item && typeof item === 'string') {
        bucketList.push(item);
        console.log(`"${item}" has been added to your bucket list.`);
    } else {
        console.log("Please provide a valid item.");
    }
}

// Example usage
addItem("Skydiving");
console.log(bucketList);

//QN 2

// Function to display all items in the bucket list
function displayItems() {
    if (bucketList.length > 0) {
        console.log("Your bucket list:");
        bucketList.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    } else {
        console.log("Your bucket list is empty.");
    }
}

// Example usage
displayItems();

//QN 3

// Function to remove an item from the bucket list
function removeItem(item) {
    const index = bucketList.indexOf(item);
    if (index !== -1) {
        bucketList.splice(index, 1);
        console.log(`"${item}" has been removed from your bucket list.`);
    } else {
        console.log(`"${item}" is not in your bucket list.`);
    }
}

// Example usage
removeItem("Skydiving");
console.log(bucketList);