for i = 1:74
    a = imread(strcat(int2str(i), '.jpg'));
    b = imresize(a, [700 900]);
    imwrite(b, strcat('0', strcat(int2str(i), '.jpg')));
end