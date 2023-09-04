/***
 * @creater:ACBash
 * @create_time:22-7-11 0:9:11
 * @last_modify:ACBash
 * @modify_time:22-7-11 0:9:12
 * @line_count:9
 **/

def backtrack(row):
    for col in range(4):
        if can_place_queen(row, col):
            place_queen(row, col)
            if row == 3:
                # we found a solution
            else:
                backtrack(row+1)  # check next row
            remove_queen(row, col)