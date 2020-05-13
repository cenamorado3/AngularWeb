class BinomaticDisconfigurationTool:
    def isPrime(self, n):
        if n <= 1:
            return False

        for i in range(2, n):
            if n % i == 0:
                return False
        return True

    def ConvertToBinaryArray(self, i):
        binaries = []
        # for c in bytearray('123', encoding='utf-8'):
        #     binaries.append(format(c, 'b'))
        #     print(binaries)
        # return binaries
        for c in str(i):
            ibit = format(ord(c), 'b')
            ibyte = int.to_bytes(int(ibit), 8, 'little')
            byteString = str(ibyte[2:-1].decode('utf-8'))
            binaries.append(byteString)
        return binaries
        

    def LeftShift(self, b):
        return b << 1