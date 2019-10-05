combine:
	gcc combine.c -o c
	./c
	rm -f c

host:
	make combine
	gcc host.c -o h
	./h

clean:
	rm -f c h
