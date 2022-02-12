def subsetA(arr)
  total = 0
  arr.each do |num|
      total += num
  end
  i = 0
  subset = []
  arr.each do |number|
    while i < arr.length
      if (total - (number + arr[i])) < (number + arr[i])
        subset = [number, arr[i]]
      end
      i += 1
    end
  end
  p subset
end

# subsetA([5, 3, 2, 4, 1, 2])
subsetA([3, 7, 5, 6, 2])

# total = 23
# nubmer = 3
# arr[i] = 7
# 23 - (3 + 7) = 17 < 10
# 23 - (3 + 5) = 15 < 8
# 23 - (3 + 6) = 14 < 9
# 23 - (3 + 2) = 18 < 5
# 23 - (7 + 5) = 11 < 12