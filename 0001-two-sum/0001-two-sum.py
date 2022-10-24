class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {}
        
        for i, val in enumerate(nums):
            diff = target - nums[i]
            
            if diff in dict:
                return [dict[diff], i]
            else:
                dict[val] = i