
// You should implement your task here.

module.exports = function towelSort (matrix) {
     if (matrix && matrix.length != 0) {
        let sortDirection = "straight";
        let result = [];
        matrix.forEach((element) => {
            if (sortDirection === "straight") {
                result = result.concat(element);
                sortDirection = "reverse";
            } else if (sortDirection === "reverse") {
                result = result.concat(element.reverse());
                sortDirection = "straight";
            }
        });
        return result;
    } else {
        return [];
    }
}
