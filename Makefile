combine:
	gcc combine.c -o c
	./c

host:
	make combine
	gcc inspector.c -o i
	./i

clean:
	rm -f c i
