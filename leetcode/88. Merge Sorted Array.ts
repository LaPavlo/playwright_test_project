function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const n1 = [...nums1].slice(0, m);
    const n2 = [...nums2].slice(0, n);

     nums1 = (n1.concat(n2)).sort();
     console.log(nums1);
};


merge([1,2,3,0,0,0], 3, [2, 5, 6], 3);
merge([0], 0, [1], 1);
merge([0], 0, [1], 1);