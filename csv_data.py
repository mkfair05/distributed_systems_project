from prettytable import from_csv, PrettyTable

# begin the table
print("<table>")

# column headers
print("<\ttr>")
print("<\t\tth>DATE (YYYY-MM-DD)</th>")
print("<\t\tth>SALINITY (PSU)</th>")
print("<\t\tth>TEMPERATURE( C )</th>")
print("<\t\tth>LATITUDE (DECIMAL DEGREES)</th>")
print("<\t\tth>LONGITUDE (DECIMAL DEGREES)</th>")
print("<\t/tr>")

# date_col = []
# sal_col = []
# temp_col = []
# lat_col = []
# long_col = []

# t = PrettyTable()
# t.field_names = ["DATE (YYYY-MM-DD)", "SALINITY (PSU)", "TEMPERATURE( C )", "LATITUDE (DECIMAL DEGREES)", "LONGITUDE (DECIMAL DEGREES)"]
# csv_file = open("test_data.csv", "r")

with open("test_data.csv", "r") as csv_file:
    lines = csv_file.readlines()
    first_line = lines[0]
    # second_line = lines[1]
    # print(first_line)
    # print(second_line)
    l = lines[2:]
    for i in l:
        print("<tr>")
        row = i.split(",")
        # print row
       
       
        date = row[0]
        salinity = row[1]
        temp = row[2]
        latitude = row[3]
        longitude = row[4]
        print("\t<td>%s<td>" % date)
        print("\t<td>%s<td>" % salinity)
        print("\t<td>%s<td>" % temp)
        print("\t<td>%s<td>" % latitude)
        print("\t<td>%s<td>" % longitude)

        print("<tr>")
        # t.add_row([date, salinity, temp, latitude, longitude])

        # print i

print("</table>")

    # for i in lines[2:]
    #     print(i)

t.field_names = [second_line[0], second_line[1],second_line[2],second_line[3], second_line[4]]
for line in csv_file:
    # print(len(line))
    # print line
    row = line.split(",")
    # print row

    date = row[0]
    salinity = row[1]
    temp = row[2]
    latitude = row[3]
    longitude = row[4]

    t.add_row([date, salinity, temp, latitude, longitude])


    # for i in row:
        # print i

    # date_col.append(row[0])
    # sal_col.append(row[1])
    # temp_col.append(row[2])
    # lat_col.append(row[3])
    # long_col.append(row[4])
    
    # t.add_column('Date (YYYY-MM-DD', date_col)
    # t.add_column('Date (YYYY-MM-DD)', sal_col)
    # t.add_column('Date (YYYY-MM-DD)', temp_col)
    # t.add_column('Date (YYYY-MM-DD)', lat_col)
    # t.add_column('Date (YYYY-MM-DD)', long_col)


# print(t)


# print table