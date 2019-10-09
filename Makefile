combine:
	gcc combine.c -o c
	./c

host:
	make combine
	gcc inspector.c -o i
	./i ./dist

clean:
	rm -f c i
