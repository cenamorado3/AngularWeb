class BinomaticDisconfigurationTool:
    def isPrime(self, n):
        if n <= 1:
            return False

        for i in range(2, n):
            if n % i == 0:
                return False
        return True

    def isChord(self, n):
        if n % 3 == 0 or n % 5 == 0 or n % 7 == 0:
            return True
        else:
             return False

    def ConvertToBinaryArray(self, i):
        binaries = []
        for c in str(i):
            if not c.isnumeric():
                raise Exception(c, 'is not numeric')
                #return {Token: 'Signature verification failed'}
            ibit = format(ord(c), 'b')
            binaries.append(self.Pack(ibit))
        return binaries
        
    def Unpack(self, binArray):
        bins = []
        for b in binArray:
            bins.append(int(b, 2))
        return self.Flatten(bins)

    def Flatten(self, bin):
        flattened = map(str, bin)
        flattened = ''.join(flattened)
        return int(flattened)
        


    def Pack(self, b):
        bits = ''
        for i in range(len(b)):
            if i == 0 or i == 1:
                bits += '0'
            else:
                bits += b[i]
        return bits
    

    def LeftShift(self, b, n = 1):
        return b << n

    def RightShift(self, b, n = 1):
        return b >> 1

    def OrOne(self, b):
        return b | 1

    def OrZero(self, b):
        return b | 0

    def Flip(self, b):
        return ~b

    def AndOne(self, b):
        return b & 1 
    
    def AndZero(self, b):
        return b & 0

    def Complement(self, b):
        return (b & -b) + 1