combine:
	gcc combine.c -o h
	./h

host:
	make combine
	gcc host.c -o h

clean:
	rm -f h
